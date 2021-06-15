import {List, Datagrid, TextField,
    ReferenceField, EditButton, EmailField, DeleteButton, Create, Edit, SimpleForm, 
    TextInput, 
    ReferenceInput, SelectInput, Filter} from "react-admin";

    
    const PostTitle = ({record}) => 
    <span>Utilizador {record ? `"${record.nome}"` : ''}</span>
    const PostFilter = (props) => <Filter {...props}>
        <TextInput label="Email" source="email" alwaysOn />
    </Filter>

export const UtilizadorList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="nome" />
            <EmailField source="email" />
            <TextField source="password" />
            <ReferenceField source="carteiraId" reference="carteiras"><TextField source="id" /></ReferenceField>
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const UtilizadorEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="email" />
            <TextInput source="password" />
            <ReferenceInput source="carteiraId" reference="carteiras"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const UtilizadorCreate = props => (
    <Create title="Novo Registo" {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="email" />
            <TextInput source="password" />
        </SimpleForm>
    </Create>
);