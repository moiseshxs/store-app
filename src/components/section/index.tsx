import { Pressable, View, Text } from 'react-native';

interface Props {
    name: string;
    subName: string;
    action: () => void;
}

export function Section({ name, subName, action}: Props) {
    return (
        <Pressable className='flex-row w-full justify-between items-center mt-3'
        onPress={(action)}
        >
            <Text className='text-3xl font-bold'>{name}</Text>

            <Text className='text-gray-400'>{subName}</Text>
        </Pressable>
    );
}