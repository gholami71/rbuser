import React, { useRef, useEffect, useState } from 'react';
import 'tabulator-tables/dist/css/tabulator.min.css';
import { TabulatorFull as Tabulator } from 'tabulator-tables';

const ExplorTable = ({ data ,status}) => {
  const tableRef = useRef(null);
  const [tableInstance, setTableInstance] = useState(null);

  useEffect(() => {
    if (tableRef.current) {
      const newTableInstance = new Tabulator(tableRef.current, {
        data: data,
        autoColumns:true,
        layout:"fitColumns",
        layoutColumnsOnNewData:true,
        responsiveLayout:'collapse',
        textDirection:"rtl",
        resizableRows:true,
        pagination:true,
        paginationSize:20,
        paginationButtonCount:5,
        paginationCounter:function(pageSize, currentRow, currentPage, totalRows, totalPages){return "نمایش صفحه " + currentPage +  " از " + totalPages + " صفحه";},
        paginationCounterElement:"#page-count"
    
      });

      setTableInstance(newTableInstance);

      return () => {
        if (tableInstance) {
          tableInstance.destroy();
        }
      };
    }
  }, [data,status]);

  return <div className='table' ref={tableRef}></div>;
};

export default ExplorTable;
