import NotFound from '@components/NotFound';
import { TopProgressCom } from '@services/utils/topProgress.service';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IRouteList, routeList } from './list.route';

export const Router = () => (
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        {routeList.map((route: IRouteList, index: number) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Suspense fallback={<TopProgressCom />}>
                  <route.component />
                </Suspense>
              }
            />
          );
        })}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);
