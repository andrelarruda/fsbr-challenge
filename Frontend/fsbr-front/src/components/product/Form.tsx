import React from 'react'
import { Product } from "../../types/Product"
import { Divider, Form, Flex, Typography, Input, InputNumber, Button } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { ShowToast, ToastType } from '../../utils/toast/Toast';
import { useCreateProductMutation, useUpdateProductMutation } from '../../services/apiSlice';

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
    price: number;
    stockQuantity: number;
    categoryId: number;
    categoryName?: string;
};

interface ProductFormProps {
    product?: Product
    isUpdate: boolean
}

export default function ProductForm (productFormProps: ProductFormProps) {
    const navigate = useNavigate()
    const [createProduct] = useCreateProductMutation();
    const [updateProduct] = useUpdateProductMutation();
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
                        if(!productFormProps.isUpdate) {
                            createProduct(data)
                                .unwrap()
                                .then(() => {
                                    ShowToast(ToastType.SUCCESS, "Produto criado com sucesso.")
                                    navigate('/products')
                                })
                                .catch((e) => {
                                    ShowToast(ToastType.ERROR, e.data?.errors?.Description)
                                })
                        } else {
                            updateProduct(data)
                                .unwrap()
                                .then(() => {
                                    ShowToast(ToastType.SUCCESS, "Produto atualizado com sucesso.")
                                    navigate('/products')
                                })
                                .catch((e) => {
                                    ShowToast(ToastType.ERROR, e.data?.errors?.Description)
                                })
                        }
                    }}
                    onFinishFailed={() => { alert('Algo deu errado.') }}
                    autoComplete='off'
                    initialValues={{
                        ['id']: productFormProps?.product?.id,
                        ['name']: productFormProps?.product?.name,
                        ['description']: productFormProps?.product?.description,
                        ['price']: productFormProps?.product?.price,
                        ['stockQuantity']: productFormProps?.product?.stockQuantity,
                        ['categoryId']: productFormProps?.product?.categoryId,
                    }}
                    fields={[
                        {
                            name: ['id'],
                            value: productFormProps?.product?.id
                        },
                        {
                            name: ['name'],
                            value: productFormProps?.product?.name
                        },
                        {
                            name: ['description'],
                            value: productFormProps?.product?.description
                        },
                        {
                            name: ['price'],
                            value: productFormProps?.product?.price
                        },
                        {
                            name: ['stockQuantity'],
                            value: productFormProps?.product?.stockQuantity
                        },
                        {
                            name: ['categoryId'],
                            value: productFormProps?.product?.categoryId,
                        }
                    ]}
                >
                    <Form.Item<FieldType>
                        name="id"
                        hidden={true}
                    >
                        <Input value={productFormProps?.product?.id} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Nome"
                        name="name"
                        rules={[
                            { required: true, message: 'Informe o nome do produto.' },
                        ]}
                    >
                        <Input type='text' 
                            value={productFormProps?.product?.name}
                            />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Descrição"
                        name="description"
                        rules={[
                            { required: true, message: 'Informe uma descrição para o produto.' },
                        ]}
                    >
                        <Input 
                            value={productFormProps?.product?.description}
                        />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Preço"
                        name="price"
                        rules={[
                            { required: true, message: 'Informe o preço do produto.' },
                        ]}
                    >
                        <InputNumber<string> 
                            min='0'
                            step='0.01'
                            value={productFormProps?.product?.price.toString()}
                            stringMode
                            onChange={(value) => {
                                console.log('changed: ', parseFloat(value ?? '0'))
                            }}
                        />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Estoque"
                        name="stockQuantity"
                        rules={[
                            { required: true, message: 'Informe a quantidade em estoque.' },
                        ]}
                    >
                        <InputNumber 
                            min={0}
                            value={productFormProps?.product?.stockQuantity}
                        />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Categoria"
                        name="categoryId"
                        rules={[
                            { required: true, message: 'Informe a categoria a qual pertence o produto' },
                        ]}
                    >
                        <InputNumber 
                            value={productFormProps?.product?.categoryId}
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