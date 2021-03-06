import React from "react";
import { DataGrid } from '@mui/x-data-grid';


// https://www.youtube.com/watch?v=70wozHFsZFo Youtube video for creating your own data table with sorting etc.

// https://mui.com/components/data-grid/


export default function MaterialDataTable( { data }) {
    const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({
      subjectivity: false,
      id: false
    });
    // console.log(data)
    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 30, flex: 1, hide: true },
        { field: 'ticker', headerName: 'Crypto Coin', minWidth: 10, flex: 1 },
        { field: 'cmc_rank', headerName: 'CMC Rank', minWidth: 10, flex: 1 },
        { field: 'polarity', headerName: 'Polarity', type: 'number', width: 200, flex: 1 },
        { field: 'subjectivity', headerName: 'Subjectivity', type: 'number', width: 200, flex: 1, hide: true },
        { field: 'date', headerName: 'Date', width: 200, flex: 1 }
    ];

    return (
    <div style={{ height: 700, padding: '4%', display: 'flex', textAlign: 'center', width: '80%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={25}
          rowsPerPageOptions={[25]}
          checkboxSelection
          sx={{
            boxShadow: 2,
            background: 'white',
            border: 2,
            m: 2,
            borderColor: 'white',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) =>
            setColumnVisibilityModel(newModel)
          }
        />
    </div>
    )
}

