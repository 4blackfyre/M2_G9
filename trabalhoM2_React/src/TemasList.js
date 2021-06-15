import {List, Datagrid, TextField,
    ReferenceField, EditButton, DeleteButton, Create, Edit, SimpleForm, 
    TextInput, 
    ReferenceInput, SelectInput, Filter} from "react-admin";

    const PostTitle = ({record}) => 
    <span>Temas {record ? `"${record.nome}"` : ''}</span>
    const PostFilter = (props) => <Filter {...props}>
        <TextInput label="Nome Tema" source="nome" alwaysOn />
        
    </Filter>

export const TemaList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="descricao" />
            <ReferenceField source="filmeId" reference="filmes"><TextField source="id" /></ReferenceField>
            <ReferenceField source="livroId" reference="livros"><TextField source="id" /></ReferenceField>
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);
export const TemaEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            
            <TextInput source="nome" />
            <TextInput source="descricao" />
            <ReferenceInput source="filmeId" reference="filmes"><SelectInput optionText="id" /></ReferenceInput>
            
        </SimpleForm>
    </Edit>
);
export const TemaCreate = props => (
    <Create {...props}>
        <SimpleForm>
            
            <TextInput source="nome" />
            <TextInput source="descricao" />
            <ReferenceInput source="filmeId" reference="filmes"><SelectInput optionText="id" /></ReferenceInput>
            
        </SimpleForm>
    </Create>
);