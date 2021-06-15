import {List, Datagrid, TextField,
    ReferenceField, EditButton, DeleteButton, Create, Edit, SimpleForm, 
    TextInput, 
    ReferenceInput, SelectInput, Filter} from "react-admin";

    const PostTitle = ({record}) => 
    <span>Cinemas {record ? `"${record.nome}"` : ''}</span>
    const PostFilter = (props) => <Filter {...props}>
        <TextInput label="Nome Cinema" source="nome" alwaysOn />
    </Filter>

export const CinemaList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="nome" />
            <TextField source="local" />
            <TextField source="horario" />
            <ReferenceField source="filmeId" reference="filmes"><TextField source="nome" /></ReferenceField>
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const CinemaEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="local" />
            <TextInput source="horario" />
            <ReferenceInput source="filmeId" reference="filmes"><SelectInput optionText="nome" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const CinemaCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="local" />
            <TextInput source="horario" />
            <ReferenceInput source="filmeId" reference="filmes"><SelectInput optionText="nome" /></ReferenceInput>
        </SimpleForm>
    </Create>
);