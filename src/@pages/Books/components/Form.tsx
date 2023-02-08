/* eslint-disable react/jsx-props-no-spreading */
import RequiredText from '@components/RequiredText/RequiredText';
import { useForm } from 'react-hook-form';

interface IBookInfo {
  bookCode: string;
  bookName: string;
  category: string;
  writer: string;
  publisher: string;
  qty: number;
  purchasePrice: number;
  sellPrice: number;
}
interface IFormProps {
  onFormSubmit: any;
  isLoading?: boolean;
}

export default function Form({ onFormSubmit, isLoading }: IFormProps) {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm<IBookInfo>({});

  return (
    <div>
      {' '}
      <form noValidate onSubmit={handleSubmit(onFormSubmit)}>
        <div className="my-2">
          <label className="" htmlFor="bookCode">
            Book Code: <RequiredText text={'*'} />
          </label>
          <input
            type="bookCode"
            className="form-control"
            id="bookCode"
            {...register('bookCode', {
              required: true
            })}
            placeholder="Book Code"
          />
          {errors.bookCode && <RequiredText text={'Book Code is required'} />}
        </div>
        <div className="my-2">
          <label className="" htmlFor="bookName">
            Book Name: <RequiredText text={'*'} />
          </label>
          <input
            className="form-control"
            id="bookName"
            {...register('bookName', {
              required: true
            })}
            placeholder="Book Name"
          />
          {errors.bookName && <RequiredText text={'Book Name is required'} />}
        </div>
        <div className="my-2">
          <label className="" htmlFor="category">
            Category : <RequiredText text={'*'} />
          </label>
          <input
            className="form-control"
            id="category"
            {...register('category', {
              required: true
            })}
            placeholder="Category "
          />
          {errors.category && <RequiredText text={'Category is required'} />}
        </div>
        <div className="my-2">
          <label className="" htmlFor="writer">
            Writer: <RequiredText text={'*'} />
          </label>
          <input
            className="form-control"
            id="writer"
            {...register('writer', {
              required: true
            })}
            placeholder="Writer Name"
          />
          {errors.writer && <RequiredText text={'Writer is required'} />}
        </div>
        <div className="my-2">
          <label className="" htmlFor="publisher">
            publisher: <RequiredText text={'*'} />
          </label>
          <input
            className="form-control"
            id="publisher"
            {...register('publisher', {
              required: true
            })}
            placeholder="Publisher"
          />
          {errors.publisher && <RequiredText text={'Publisher is required'} />}
        </div>
        <div className="my-2">
          <label className="" htmlFor="qty">
            Quantity: <RequiredText text={'*'} />
          </label>
          <input
            className="form-control"
            id="qty"
            {...register('qty', {
              required: true
            })}
            type="number"
            placeholder="Quantity"
          />
          {errors.qty && <RequiredText text={'Quantity is required'} />}
        </div>
        <div className="my-2">
          <label className="" htmlFor="purchasePrice">
            Purchase Price: <RequiredText text={'*'} />
          </label>
          <input
            className="form-control"
            id="purchasePrice"
            {...register('purchasePrice', {
              required: true
            })}
            type="number"
            placeholder="Purchase price"
          />
          {errors.purchasePrice && <RequiredText text={'Purchase price is required'} />}
        </div>
        <div className="my-2">
          <label className="" htmlFor="sellPrice">
            Sell Price: <RequiredText text={'*'} />
          </label>
          <input
            className="form-control"
            id="sellPrice"
            type="number"
            {...register('sellPrice', {
              required: true
            })}
            placeholder="Selling price"
          />
          {errors.sellPrice && <RequiredText text={'Sell price is required'} />}
        </div>

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn button btn-primary" disabled={isLoading}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
