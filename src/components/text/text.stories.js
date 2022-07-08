import Text from "./text";

export default {
    title: "Text",
    component: Text,
    args: {
        text: "Hello world!"
    }
};

const TextTemplate = args => <Text {...args} />;
 
const Standard = TextTemplate.bind({});
 
export {Standard};