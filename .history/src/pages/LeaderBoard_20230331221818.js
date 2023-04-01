import { useState } from 'react';
import MaterialTable from 'material-table';
import { data } from '../data';
const LeaderBoard = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const columns = [
    { title: 'Title', field: 'title' },
    { title: 'Author', field: 'authors' },
    { title: 'Page Count', field: 'num_pages' },
    { title: 'Rating', field: 'rating' }
  ];
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={columns}
        data={data}
        title='Books Directory'
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          search: false,
          rowStyle: rowData => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? '#67aeae' : '#FFF'
          })
        }}
      />
    </div>
  );
};
export default LeaderBoard;