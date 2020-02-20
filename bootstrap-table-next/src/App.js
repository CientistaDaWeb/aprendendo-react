import React, {Component} from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory, {textFilter, numberFilter} from 'react-bootstrap-table2-filter'

class App extends Component {
    render() {
        const data = [
            {
                id: 1,
                name: 'Fernando Henrique',
                age: 35
            },
            {
                id: 2,
                name: 'Jacke',
                age: 30
            },
            {
                id: 3,
                name: 'Princesa Danyela',
                age: 25
            },
            {
                id: 4,
                name: 'João das Neves',
                age: 40
            },
            {
                id: 5,
                name: 'Fin',
                age: 99
            },
            {
                id: 6,
                name: 'Rei Gelado',
                age: 9541
            },
            {
                id: 7,
                name: 'Rick',
                age: 66
            },
            {
                id: 8,
                name: 'Morty',
                age: 12
            }
        ]


        const colums = [
            {
                dataField: 'id',
                text: 'Id',
                filter: textFilter(),
                sort: true
            },
            {
                dataField: 'name',
                text: 'Nome',
                filter: textFilter(),
                sort: true
            },
            {
                dataField: 'age',
                text: 'Idade',
                filter: numberFilter(),
                sort: true
            }
        ]

        return (
            <div className="App">
                <BootstrapTable
                    keyField='id'
                    data={data}
                    columns={colums}
                    pagination={paginationFactory()}
                    filter={filterFactory()}
                >
                </BootstrapTable>
            </div>
        )
    }
}

export default App;
