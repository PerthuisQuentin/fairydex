import classNames from 'classnames';
import Image from 'next/image';

import { BangbooId } from '@/bangboo/data/bangboo.type';
import { getBangbooIconUrl } from '@/bangboo/data/bangboos.data';

type BangbooIconProps = {
    readonly bangbooId: BangbooId;
    readonly className?: string;
};

export default function BangbooIcon({ bangbooId, className }: BangbooIconProps) {
    return (
        <Image
            src={getBangbooIconUrl(bangbooId)}
            width={142}
            height={142}
            alt={`${bangbooId} bangboo icon`}
            className={classNames('rounded flex-shrink-0', className)}
            unoptimized={true}
        />
    );
}