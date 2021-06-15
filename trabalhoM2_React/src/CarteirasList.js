import {List, Datagrid, TextField, DateField,
    ReferenceField, EditButton, DeleteButton, Create, Edit, SimpleForm, 
    TextInput, DateInput,NumberField,NumberInput, 
    ReferenceInput, SelectInput, Filter} from "react-admin";

    const PostTitle = ({record}) => 
    <span>Carteiras {record ? `"${record.nome}"` : ''}</span>
    const PostFilter = (props) => <Filter {...props}>
        <TextInput label="Nome Utilizador" source="utilizador" alwaysOn />
        
        
    </Filter>

   

export const CarteiraList = props => (
    <List filters={<PostFilter />}{...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="utilizadorId" reference="utilizadors">
                <TextField source="nome" />
            </ReferenceField>
            
            <DateField source="data" />
            <NumberField source="numerofilmes" />
            
            
            <NumberField source="numerolivros" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const CarteiraEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DateInput source="data" />
            <NumberInput source="numerofilmes" />
            <NumberInput source="numerolivros" />
            <ReferenceInput source="utilizadorId" reference="utilizadors"><SelectInput optionText="nome" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const CarteiraCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <DateInput source="data" />
            <NumberInput source="numerofilmes" />
            <NumberInput source="numerolivros" />
            <ReferenceInput source="utilizadorId" reference="utilizadors"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Create>
);