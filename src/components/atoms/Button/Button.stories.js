import Button from './Button';
import { defaultTheme } from '../../../themes';

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'danger']
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg']
        }
    }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary Button',
    variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Secondary Button',
    variant: 'secondary'
};

export const AllSizes = () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
    </div>
);
