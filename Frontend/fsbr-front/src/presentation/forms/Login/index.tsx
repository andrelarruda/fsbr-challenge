import type { FormProps } from 'antd';
import { Button, Form, Input, Typography } from 'antd'
import { z } from 'zod'

const { Title } = Typography;

const loginFormSchema = z.object({
    email: z.string().min(1, 'O documento CPF/CNPJ é obrigatório'),
    password: z.string().min(6, 'A senha deve ter no minino 6 caracteres')
})

type FieldType = {
    email?: string;
    password?: string;
  };

export const LoginForm = () => {
    return (
        <Form
            name='basic'
            layout='horizontal'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onFinish={ (data) => console.log(data) }
            onFinishFailed={ () => { alert('Algo deu errado.') }}
            autoComplete='on'
        >
            <Title level={2}>Faça seu login</Title>

            <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[
                    {required: true, message: 'Por favor digite seu email.'}, 
                    {type: 'email', message: "Digite um email válido"},
                ]}
                >
                    <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Senha"
                name="password"
                rules={[
                    {required: true, message: 'Por favor digite sua senha.'},
                    {min: 6, message: "Digite pelo menos 6 caracteres."},
                    // {pattern: },
                ]}
                >
                    <Input.Password />
            </Form.Item>

            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Entrar
                </Button>
            </Form.Item>

            <Form.Item label={null}>
                <Button type="link" htmlType="submit">
                    Criar uma conta
                </Button>
            </Form.Item>
        </Form>
    )
}