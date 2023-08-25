import React, { useRef, useEffect, useState } from 'react';
import 'tabulator-tables/dist/css/tabulator.min.css';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import * as XLSX from 'xlsx'



const ExplorTable = ({ data ,status}) => {
  const tableRef = useRef(null);
  const [tableInstance, setTableInstance] = useState(null);

  const createExcelFile = (data) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    // تبدیل workbook به Blob
    const blob = new Blob([s2ab(XLSX.write(wb, { bookType: 'xlsx', type: 'binary' }))], {
      type: 'application/octet-stream'
    });
    
    // دانلود فایل اکسل
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.xlsx';
    a.click();
    URL.revokeObjectURL(url);
  };
  
  // تبدیل string به ArrayBuffer
  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i !== s.length; ++i) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
  };
  

  
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
        paginationCounterElement:"#page-count",
        // اضافه کردن منوی راست کلیک
        rowContextMenu: [
          {
            label: 'دانلود به صورت اکسل',
            action: function (e, column, row) {
              createExcelFile(data);
            }
          }
        ],
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
