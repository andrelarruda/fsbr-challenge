import React, { useEffect, useState } from 'react'
import { ShowToast, ToastType } from '../../utils/toast/Toast';
import { useCreateCategoryMutation, useUpdateCategoryMutation } from '../../services/apiSlice';
import { Divider, Form, Flex, Typography, Input, Button } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { Category } from '../../types/Category';

const { Title } = Typography;

const boxStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    borderRadius: 6,
}

type FieldType = {
    id?: number;
    name: string;
    description: string;
};

interface CategoryFormProps {
    category?: Category
    isUpdate: boolean
}

export default function CategoryForm (categoryFormProps: CategoryFormProps) {
    const navigate = useNavigate()
    const [createUser] = useCreateCategoryMutation();
    const [updateUser] = useUpdateCategoryMutation();
    const params = useParams()

    return (
        <div>
            <Divider orientationMargin={0} orientation='left'>
                <Title level={3} style={{ alignSelf: 'left' }}>Criar/Atualizar Categoria</Title>
            </Divider>

            <Flex vertical={false} style={boxStyle} justify="center" align="center">
                <Form
                    name='basic'
                    layout='horizontal'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 800, }}
                    onFinish={(data) => {
                        if(!categoryFormProps.isUpdate) {
                            createUser(data)
                                .unwrap()
                                .then(() => {
                                    ShowToast(ToastType.SUCCESS, "Categoria criada com sucesso.")
                                    navigate('/categories')
                                })
                                .catch((e) => {
                                    ShowToast(ToastType.ERROR, e.data?.errors?.Description)
                                })
                        } else {
                            updateUser(data)
                                .unwrap()
                                .then(() => {
                                    ShowToast(ToastType.SUCCESS, "Categoria atualizada com sucesso.")
                                    navigate('/categories')
                                })
                                .catch((e) => {
                                    ShowToast(ToastType.ERROR, e.data?.errors?.Description)
                                })
                        }
                    }}
                    onFinishFailed={() => { alert('Algo deu errado.') }}
                    autoComplete='off'
                    fields={[
                        {
                            name: ['id'],
                            value: categoryFormProps?.category?.id
                        },
                        {
                            name: ['name'],
                            value: categoryFormProps?.category?.name
                        },
                        {
                            name: ['description'],
                            value: categoryFormProps?.category?.description
                        },
                    ]}
                >
                    <Form.Item<FieldType>
                        name="id"
                        hidden={true}
                        initialValue={categoryFormProps?.category?.id}
                    >
                        <Input value={categoryFormProps?.category?.id} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Categoria"
                        name="name"
                        rules={[
                            { required: true, message: 'Informe o título da categoria.' },
                            { min: 4, message: "Digite no minimo 4 letras." }
                        ]}
                    >
                        {/* <p style={{display: 'none'}}>{categoryFormProps?.category?.name}</p> */}
                        <Input type='text' 
                            value={categoryFormProps?.category?.name} 
                            defaultValue={categoryFormProps?.category?.name ?? ''} 
                            />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Descrição"
                        name="description"
                        rules={[
                            { required: true, message: 'Dê uma descrição para a categoria.' },
                        ]}
                    >
                        {/* <p style={{display: 'none'}}>{categoryFormProps?.category?.description}</p> */}
                        <Input 
                            value={categoryFormProps?.category?.description} 
                            defaultValue={categoryFormProps?.category?.description ?? ''} 
                        />
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Salvar
                        </Button>
                    </Form.Item>
                </Form>
            </Flex>
        </div>
    )
}