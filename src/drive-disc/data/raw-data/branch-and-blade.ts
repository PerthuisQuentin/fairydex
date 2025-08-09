import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.BranchAndBlade,
    name: 'Branch and Blade',
    effects2PiecesDescription: '<<critical-damage>> <<value:+16%>>',
    effects4PiecesDescription: 'When <<anomaly-mastery>> exceeds or equals <<value:115>> points, the equipper\'s <<critical-damage>> increases by <<value:30%>>.<<br>>When any squad member applies <<freeze>> or triggers the <<shatter>> effect on an enemy, the equipper\'s <<critical-rate>> increases by <<value:12%>>, lasting <<value:15s>>.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;