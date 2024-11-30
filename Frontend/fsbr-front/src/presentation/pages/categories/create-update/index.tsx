import React from 'react'
import { Divider, Form, Flex, Typography, Input, Button, message } from 'antd'
import { useCreateCategoryMutation } from '../../../../services/apiSlice';
import { useNavigate } from 'react-router-dom'

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

    const success = () => {
        message.open({
            type: 'success',
            content: 'Categoria criada com sucesso.',
            style: {
                fontSize: 18
            }
        });
    };

    const error = (e: any) => {
        message.open({
            type: 'error',
            content: `Erro ao criar categoria: ${e}`,
            style: {
                fontSize: 18
            }
        });
    };

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
                                success()
                                navigate('/categories')
                            })
                            .catch((e) => {
                                console.log()
                                error(e.data?.errors?.Description)
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