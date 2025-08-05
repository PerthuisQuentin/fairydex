import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.PufferElectro,
    name: 'Puffer Electro',
    effects2PiecesDescription: 'Increases PEN Ratio by 8%',
    effects4PiecesDescription: 'Ultimate DMG increases by 20%. Launching an Ultimate increases the equipper\'s ATK by 15% for 12s.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;