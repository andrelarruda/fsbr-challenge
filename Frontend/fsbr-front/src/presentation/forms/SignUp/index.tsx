import { Button, Form, Input, Typography, DatePicker } from 'antd'
import { NavLink } from 'react-router-dom';
import { z } from 'zod'

const { Title } = Typography;

const signupFormSchema = z.object({
    email: z.string().min(1, 'O documento CPF/CNPJ é obrigatório'),
    password: z.string().min(6, 'A senha deve ter no minino 6 caracteres')
})

type FieldType = {
    email?: string;
    password?: string;
    name: string;
    birthdate: Date;
};

export const SignupForm = () => {
    return (
        <Form
            name='basic'
            layout='vertical'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ width: '40vw' }}
            onFinish={ (data) => console.log(data) }
            onFinishFailed={ () => { alert('Algo deu errado.') }}
            autoComplete='on'
        >
            <Title level={2}>Crie a sua conta</Title>

            <Form.Item<FieldType>
                label="Nome"
                name="name"
                rules={[
                    {required: true, message: 'Nome obrigatório'}, 
                    {type: 'string', message: "Digite um nome"},
                ]}
                >
                    <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Data de nascimento"
                name="birthdate"
                rules={[
                    {required: true, message: 'Informe a sua data de nascimento'},
                ]}
                >
                    <DatePicker />
            </Form.Item>

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
                    Cadastrar
                </Button>
            </Form.Item>
            {/* <Button type="link" htmlType="submit" >
                Criar uma conta
            </Button> */}
            <Form.Item label={null}>
                <NavLink to='/login' end>
                    Voltar
                </NavLink>
            </Form.Item>
        </Form>
    )
}