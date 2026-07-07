import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { STATUS_LABEL } from '../constants/status-labels.constants';
import { Status } from '../enums/status.enum';

interface Props {
  status: string;
  classNameContainer?: string;
  classNameStatus?: string;
  classNameLabel?: string;
}

const CharacterStatus = ({
  status,
  classNameContainer,
  classNameStatus,
  classNameLabel,
}: Props) => {
  const statusLabel = STATUS_LABEL[status];

  return (
    <View
      className={twMerge(
        'flex-row justify-center items-center gap-x-1',
        classNameContainer,
      )}
    >
      <View
        className={twMerge(
          'rounded-full size-1.5 animate-pulse',
          status === Status.ALIVE
            ? 'bg-status-alive'
            : status === Status.DEAD
              ? 'bg-status-dead'
              : 'bg-status-unknown',
          classNameStatus,
        )}
      />
      <Text className={twMerge('text-sm', classNameLabel)}>
        {statusLabel}
      </Text>
    </View>
  );
};

export default CharacterStatus;
