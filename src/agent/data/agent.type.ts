import { AttributeId } from '@/attribute/data/attribute.type';
import { FactionId } from '@/faction/data/faction.type';
import { Rank } from '@/rank/data/rank.type';
import { SpecialityId } from '@/speciality/data/speciality.type';
import { VersionId } from '@/version/data/version.type';
import { WEngineId } from '@/w-engine/data/w-engine.type';

export enum AgentId {
    AlexandrinaSebastiane = 'alexandrina-sebastiane',
    AnbyDemara = 'anby-demara',
    AntonIvanov = 'anton-ivanov',
    AsabaHarumasa = 'asaba-harumasa',
    AstraYao = 'astra-yao',
    BenBigger = 'ben-bigger',
    BillyKid = 'billy-kid',
    BurniceWhite = 'burnice-white',
    CaesarKing = 'caesar-king',
    CorinWickes = 'corin-wickes',
    EllenJoe = 'ellen-joe',
    EvelynChevalier = 'evelyn-chevalier',
    GraceHoward = 'grace-howard',
    HoshimiMiyabi = 'hoshimi-miyabi',
    HugoVlad = 'hugo-vlad',
    JaneDoe = 'jane-doe',
    JuFufu = 'ju-fufu',
    KoledaBelobog = 'koleda-belobog',
    Lighter = 'lighter',
    LucianaDeMontefio = 'luciana-de-montefio',
    NekomiyaMana = 'nekomiya-mana',
    NicoleDemara = 'nicole-demara',
    PanYinhu = 'pan-yinhu',
    PiperWheel = 'piper-wheel',
    PulchraFellini = 'pulchra-fellini',
    Qingyi = 'qingyi',
    SethLowell = 'seth-lowell',
    Soldier0Anby = 'soldier-0-anby',
    Soldier11 = 'soldier-11',
    Soukaku = 'soukaku',
    Trigger = 'trigger',
    TsukishiroYanagi = 'tsukishiro-yanagi',
    UkinamiYuzuha = 'ukinami-yuzuha',
    VivianBanshee = 'vivian-banshee',
    VonLycaon = 'von-lycaon',
    YiXuan = 'yi-xuan',
    ZhuYuan = 'zhu-yuan',
}

export type AgentData = {
    id: AgentId;
    name: string;
    rank: Rank;
    isPermanent: boolean;
    firstVersionId: VersionId;
    attributeId: AttributeId;
    specialityId: SpecialityId;
    factionId: FactionId;
    signatureWEngineId: WEngineId;
}