import { BookService } from '@services/api/book.service';
import Preloader from '@services/utils/preloader.service';
import { ToastService } from '@services/utils/toastr.service';
import { useEffect, useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';

const Books = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    if (isLoading) getBooks();
  }, [isLoading]);

  const getBooks = () => {
    BookService.getAll()
      .then((res: any) => {
        setBooks([...res.payload]);
      })
      .finally(() => setIsLoading(false));
  };

  const onSubmit = (data): void => {
    setIsLoading(true);
    const reqData = {
      code: data.bookCode || '',
      name: data.bookName || '',
      category: data.category || '',
      writer: data.writer || '',
      publisher: data.publisher || '',
      qty: +data.qty || 0,
      purchasePrice: +data.purchasePrice || 0,
      sellPrice: +data.sellPrice || 0
    };
    BookService.save(reqData)
      .then((res: any) => {
        ToastService.success(res.message);
      })
      .catch((err) => {
        ToastService.error(err.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            {isLoading && <Preloader />}
            <div className="mt-5 border w-100 m-auto p-3 rounded">
              <h4 className="text-center text-custom mb-3">Book List</h4>
              {books?.length > 0 ? <Table books={books} /> : 'No book list found'}
            </div>
          </div>
          <div className="col-md-4">
            <div className="mt-5 border w-100 m-auto p-3 rounded">
              <h4 className="text-center text-custom mb-3">Book Create</h4>
              <div className="form-main">
                <Form onFormSubmit={onSubmit} isLoading={isLoading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
