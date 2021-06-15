import {List, Datagrid, TextField, DateField,
    ReferenceField, EditButton, DeleteButton, Create, Edit, SimpleForm, 
    TextInput, DateInput, 
    ReferenceInput, SelectInput, Filter} from "react-admin";

    
    const PostTitle = ({record}) => 
    <span>Filme {record ? `"${record.nome}"` : ''}</span>
    const PostFilter = (props) => <Filter {...props}>
        <TextInput label="Nome filme" source="nome" alwaysOn />
        <ReferenceInput label="Cinemas" source="cinemaId" 
        reference="cinemas" allowEmpty>
            <SelectInput optionText="nome" />
        </ReferenceInput>
        <ReferenceInput label="Serviços" source="servicoId" 
        reference="servicos" allowEmpty>
            <SelectInput optionText="nome" />
        </ReferenceInput>
    </Filter>

export const FilmesList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="nome" />
            <TextField source="realizador" />
            <TextField source="produtora" />
            <DateField source="ano" />
            <ReferenceField source="carteiraId" reference="carteiras">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField source="cinemaId" reference="cinemas">
                <TextField source="nome" />
            </ReferenceField>
            <ReferenceField source="servicoId" reference="servicos">
                <TextField source="nome" />
            </ReferenceField>
            
            
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const FilmeEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="realizador" />
            <TextInput source="produtora" />
            <DateInput source="ano" />
            <ReferenceInput source="carteiraId" reference="carteiras"><SelectInput optionText="id" /></ReferenceInput>
            <ReferenceInput source="cinemaId" reference="cinemas"><SelectInput optionText="nome" /></ReferenceInput>
            <ReferenceInput source="servicoId" reference="servicos"><SelectInput optionText="nome" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const FilmeCreate = props => (
    <Create title="Novo Registo" {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="realizador" />
            <TextInput source="produtora" />
            <DateInput source="ano" />
            <ReferenceInput source="carteiraId" reference="carteiras"><SelectInput optionText="id" /></ReferenceInput>
            <ReferenceInput source="cinemaId" reference="cinemas"><SelectInput optionText="nome" /></ReferenceInput>
            <ReferenceInput source="servicoId" reference="servicos"><SelectInput optionText="nome" /></ReferenceInput>
        </SimpleForm>
    </Create>
);
