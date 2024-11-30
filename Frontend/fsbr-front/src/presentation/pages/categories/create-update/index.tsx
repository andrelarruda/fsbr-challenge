import React from 'react'
import { Divider, Form, Flex, Typography, Input, Button, message } from 'antd'
import { useCreateCategoryMutation } from '../../../../services/apiSlice';
import { useNavigate } from 'react-router-dom'
import { ShowToast, ToastType } from '../../../../utils/toast/Toast';

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

export default function CreateUpdateCategoryPage() {
    const [createUser] = useCreateCategoryMutation();
    const navigate = useNavigate()

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
                        createUser(data)
                            .unwrap()
                            .then(() => {
                                ShowToast(ToastType.SUCCESS, "Categoria criada com sucesso.")
                                navigate('/categories')
                            })
                            .catch((e) => {
                                ShowToast(ToastType.ERROR, e.data?.errors?.Description)
                            })
                    }}
                    onFinishFailed={() => { alert('Algo deu errado.') }}
                    autoComplete='off'
                >
                    <Form.Item<FieldType>
                        name="id"
                        hidden={true}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Categoria"
                        name="name"
                        rules={[
                            { required: true, message: 'Informe o título da categoria.' },
                            { min: 4, message: "Digite no minimo 4 letras." }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Descrição"
                        name="description"
                        rules={[
                            { required: true, message: 'Dê uma descrição para a categoria.' },
                        ]}
                    >
                        <Input />
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