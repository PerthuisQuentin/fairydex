import Image from 'next/image';

const SIZE_REGEX = /^(\d+)x(\d+)$/;

export const sizeToObject = (size: string): { width: number, height: number } => {
    const match = SIZE_REGEX.exec(size);
    if (!match) {
        throw new Error(`Invalid size format: ${size}. Expected format is 'widthxheight'.`);
    }
    const [, width, height] = match;
    return { width: parseInt(width, 10), height: parseInt(height, 10) };
};

type SizedImageProps = {
    readonly src: string;
    readonly size: string; // Format: 'widthxheight'
    readonly alt?: string;
    readonly className?: string;
};

export const SizedImage = ({ src, size, alt, className }: SizedImageProps) => {
    const { width, height } = sizeToObject(size);

    return (
        <Image
            src={src}
            width={width}
            height={height}
            alt={alt ?? ''}
            className={className}
            unoptimized={true}
        />
    );
};