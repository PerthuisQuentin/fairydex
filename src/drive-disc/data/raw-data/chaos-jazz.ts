import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.ChaosJazz,
    name: 'Chaos Jazz',
    effects2PiecesDescription: 'Anomaly Proficiency +30',
    effects4PiecesDescription: 'Fire DMG and Electric DMG increases by 15%. While off-field, EX Special Attack and Assist Attack DMG increases by 20%. When switching on-field, this buff continues for 5s, and this continuation effect can trigger once every 7.5s.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;