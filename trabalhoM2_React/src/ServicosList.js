import {List, Datagrid, TextField, 
    EditButton, DeleteButton, Create, Edit, SimpleForm, 
    TextInput, Filter} from "react-admin";

    const PostTitle = ({record}) => 
    <span>Cinemas {record ? `"${record.nome}"` : ''}</span>
    const PostFilter = (props) => <Filter {...props}>
        <TextInput label="Nome Servico" source="nome" alwaysOn />
    </Filter>

export const ServicosList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="nome" />
            <TextField source="morada" />
            <TextField source="horario" />
            <TextField source="emprestimo" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
    );

    export const ServicoEdit = props => (
        <Edit title={<PostTitle />} {...props}>
            <SimpleForm>
                <TextInput source="nome" />
                <TextInput source="morada" />
                <TextInput source="horario" />
                <TextInput source="emprestimo" />
            </SimpleForm>
        </Edit>
    );

    export const ServicoCreate = props => (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="nome" />
                <TextInput source="morada" />
                <TextInput source="horario" />
                <TextInput source="emprestimo" />
            </SimpleForm>
        </Create>
    );