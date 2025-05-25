module.exports = {

"[project]/src/config.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// 重要提示：请将这些值替换为您的真实 App ID 和 App Key
// 并且强烈建议将它们存储在环境变量中，而不是硬编码在代码里。
__turbopack_context__.s({
    "API_BASE_URL": (()=>API_BASE_URL),
    "APP_ID": (()=>APP_ID),
    "APP_KEY": (()=>APP_KEY),
    "LOGIN_PROVIDERS": (()=>LOGIN_PROVIDERS),
    "SESSION_COOKIE_NAME": (()=>SESSION_COOKIE_NAME)
});
const APP_ID = process.env.NEXT_PUBLIC_APP_ID || '1152';
const APP_KEY = process.env.NEXT_PUBLIC_APP_KEY || '9b8011704126a18d76ca4868c30f73af';
const API_BASE_URL = 'https://login.shw1.com';
const LOGIN_PROVIDERS = [
    {
        type: 'qq',
        name: 'QQ'
    },
    {
        type: 'wx',
        name: '微信'
    }
];
const SESSION_COOKIE_NAME = 'userSession';
}}),
"[project]/src/data/buildings.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "mockBuildings": (()=>mockBuildings)
});
const mockBuildings = [
    {
        id: '1',
        name: '天空之城拉普达',
        author: '建筑大师A',
        authorSocialUid: 'user_A_social_uid',
        description: '一座漂浮在云层之上的宏伟城堡，灵感来源于经典动画。拥有复杂的花园和神秘的内部结构。',
        imageUrl: 'https://placehold.co/800x600.png',
        aiHint: 'minecraft castle sky',
        votes: 120,
        size: '大型',
        dimensions: {
            x: 100,
            y: 60,
            z: 100
        },
        territoryIdentifier: 'SkyLaputa',
        server: 'Survival-1',
        coordinates: {
            x: 123,
            y: 150,
            z: -456
        },
        eventEdition: 23,
        eventYear: 2023,
        status: '有效',
        competitionId: 'comp1',
        submissionDate: '2023-01-15T10:00:00Z'
    },
    {
        id: '2',
        name: '像素风现代都市',
        author: '像素艺术家B',
        authorSocialUid: 'user_B_social_uid',
        description: '用方块精心构建的繁华都市景观，包含摩天大楼、公园和交通系统，细节惊人。',
        imageUrl: 'https://placehold.co/800x600.png',
        aiHint: 'minecraft city pixel',
        votes: 95,
        size: '大型',
        dimensions: {
            x: 120,
            y: 70,
            z: 120
        },
        territoryIdentifier: 'PixelMetropolis',
        server: 'Survival-2',
        coordinates: {
            x: 789,
            y: 64,
            z: 101
        },
        eventEdition: 23,
        eventYear: 2023,
        status: '等待审核',
        competitionId: 'comp1',
        submissionDate: '2023-02-10T10:00:00Z'
    },
    {
        id: '3',
        name: '幽暗密林神殿',
        author: '探险家C',
        authorSocialUid: 'user_C_social_uid',
        description: '隐藏在茂密丛林深处的古老神殿，充满了谜题和机关，散发着神秘的气息。',
        imageUrl: 'https://placehold.co/800x600.png',
        aiHint: 'minecraft temple jungle',
        votes: 158,
        size: '中型',
        dimensions: {
            x: 50,
            y: 30,
            z: 50
        },
        territoryIdentifier: 'JungleSanctum',
        server: 'Survival-1',
        coordinates: {
            x: -200,
            y: 70,
            z: 350
        },
        eventEdition: 24,
        eventYear: 2024,
        status: '有效',
        competitionId: 'comp2',
        submissionDate: '2024-06-05T10:00:00Z'
    },
    {
        id: '4',
        name: '海底水晶宫殿',
        author: '海洋工程师D',
        authorSocialUid: 'user_D_social_uid',
        description: '一座完全由水晶和发光方块构成的水下宫殿，鱼群在周围游弋，如梦似幻。',
        imageUrl: 'https://placehold.co/800x600.png',
        aiHint: 'minecraft underwater palace',
        votes: 150,
        size: '中型',
        dimensions: {
            x: 70,
            y: 40,
            z: 60
        },
        territoryIdentifier: 'CrystalAbyss',
        server: 'CreativeBuild',
        coordinates: {
            x: 500,
            y: 40,
            z: -800
        },
        eventEdition: 24,
        eventYear: 2024,
        status: '审查中-被举报',
        competitionId: 'comp2',
        submissionDate: '2024-06-10T10:00:00Z',
        reportReason: 'This build appears to use world edit excessively beyond competition limits.',
        lastReportedBy: 'some_reporter_uid',
        lastReportDate: '2024-07-15T12:00:00Z'
    },
    {
        id: '5',
        name: '中世纪村庄',
        author: '历史爱好者E',
        authorSocialUid: 'user_E_social_uid',
        description: '一个富有生活气息的中世纪村庄，有风车、市场、教堂和各种民居，仿佛时光倒流。',
        imageUrl: 'https://placehold.co/800x600.png',
        aiHint: 'minecraft village medieval',
        votes: 60,
        size: '中型',
        dimensions: {
            x: 60,
            y: 25,
            z: 70
        },
        territoryIdentifier: 'MedievalHamlet',
        server: 'Survival-1',
        coordinates: {
            x: 50,
            y: 68,
            z: 600
        },
        eventEdition: 25,
        eventYear: 2025,
        status: '作弊',
        competitionId: 'comp3',
        submissionDate: '2025-01-20T10:00:00Z'
    },
    {
        id: '6',
        name: '未来派空间站',
        author: '科幻迷F',
        authorSocialUid: 'user_F_social_uid',
        description: ' orbiting a distant planet, this space station features advanced technology and sleek design.',
        imageUrl: 'https://placehold.co/800x600.png',
        aiHint: 'minecraft space station',
        votes: 110,
        size: '大型',
        dimensions: {
            x: 90,
            y: 55,
            z: 90
        },
        territoryIdentifier: 'StarbaseOdyssey',
        server: 'SciFi-Zone',
        coordinates: {
            x: 0,
            y: 200,
            z: 0
        },
        eventEdition: 25,
        eventYear: 2025,
        status: '无效',
        competitionId: 'comp3',
        submissionDate: '2025-02-01T10:00:00Z'
    },
    {
        id: '7',
        name: '温馨林间小屋',
        author: '隐士G',
        authorSocialUid: 'user_G_social_uid',
        description: '一座小巧精致的林间小屋，周围环绕着鲜花和宁静的池塘。',
        imageUrl: 'https://placehold.co/800x600.png',
        aiHint: 'minecraft cabin forest',
        votes: 165,
        size: '小型',
        dimensions: {
            x: 20,
            y: 15,
            z: 25
        },
        territoryIdentifier: 'ForestRetreat_7',
        server: 'Survival-2',
        coordinates: {
            x: -150,
            y: 72,
            z: -250
        },
        eventEdition: 24,
        eventYear: 2024,
        status: '有效',
        competitionId: 'comp2',
        submissionDate: '2024-07-01T10:00:00Z'
    },
    {
        id: '8',
        name: '古堡魅影',
        author: '建筑大师A',
        authorSocialUid: 'user_A_social_uid',
        description: '一座矗立在悬崖边的古老城堡，夜晚时分更显神秘。',
        imageUrl: 'https://placehold.co/800x600.png',
        aiHint: 'minecraft castle cliff',
        votes: 88,
        size: '大型',
        dimensions: {
            x: 90,
            y: 70,
            z: 80
        },
        territoryIdentifier: 'HauntedKeep',
        server: 'Survival-1',
        coordinates: {
            x: 321,
            y: 100,
            z: -567
        },
        eventEdition: 24,
        eventYear: 2024,
        status: '有效',
        competitionId: 'comp4',
        submissionDate: '2024-03-10T10:00:00Z'
    }
];
}}),
"[project]/src/data/competitions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "mockCompetitions": (()=>mockCompetitions)
});
const mockCompetitions = [
    {
        id: 'comp1',
        name: '2023年度建筑节',
        year: 2023,
        status: '已结束',
        startDate: '2023-01-01',
        endDate: '2023-03-31',
        description: '2023年度的盛大建筑活动，涌现了许多优秀作品。',
        territoryPrefix: '[23annual-builder]'
    },
    {
        id: 'comp2',
        name: '2024夏季创意赛',
        year: 2024,
        status: '进行中',
        startDate: '2024-06-01',
        endDate: '2024-08-31',
        description: '以“清凉夏日”为主题，发挥无限创意，搭建梦想中的夏日乐园。',
        territoryPrefix: '[24summer-builder]'
    },
    {
        id: 'comp3',
        name: '2025未来城市设计挑战',
        year: 2025,
        status: '策划中',
        startDate: '2025-01-15',
        endDate: '2025-04-15',
        description: '探索未来城市的可持续发展与创新建筑设计理念。',
        territoryPrefix: '[25future-builder]'
    },
    {
        id: 'comp4',
        name: '中世纪幻想主题赛',
        year: 2024,
        status: '评审中',
        startDate: '2024-03-01',
        endDate: '2024-05-31',
        description: '重现中世纪的城堡、村庄与神秘传说。',
        territoryPrefix: '[24medieval-builder]'
    }
];
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[project]/src/app/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"000f9c3d737d6b103cc8eb48b63b334a5c578367c2":"getSubmittableCompetitions","004874233f0821a8a963583307ba771b5b0f697bc7":"getHistoricalCompetitions","006769990f4d29db3d9642a057b6c38a9af6f7f32c":"getUserSession","0071299063e7df5bc8205002c8d01f32d097bf28eb":"fetchUserSessionForClient","00924a3e4b3549f137af9ec57358120be960cd01d8":"handleLogout","00b53290c574162d521b2261cba165a710273a3676":"getCompetitions","4006d538def970e4cd9a3c4d27015b01e42ca4a958":"dismissReportAction","4017a5edd4ad103bdcfc14fce39434d645da119f55":"getCompetitionById","403eadd05e4274e25f43462da6774833b55e6f2f87":"handleLoginRedirect","40444a9b508884d641eff34582900ccddb872a70cb":"getRawBuildings","407758c31142994f61ad4a8f497bcd12b3f60f5b0b":"submitNewBuilding","407f93716e27995cc8830e1f1d5ff2e0c2a84dc3e8":"submitVote","40879a9ed5d6d88b171cdf9253f357fb32f3c77043":"createCompetition","40aa70e21df6d39915afc256fe458eddce4d328fea":"getUserSubmittedWorks","40bd91dfe39c11ef19064625013e11e94fb027dc2a":"deleteCompetition","40ce9bdb447cffe92dcd2aee716fbfa0e477608bc5":"getActiveWorks","40ffef2c295b771509830a5d640f1c6fc4cc1782ef":"deleteBuildingAction","6021c49044ee325d074326b779c603c0a1070e03ba":"getCompetitionWithWorks","604dfa2b493bc34c6cf943fe7c0f0210f2a9d90a0e":"reportBuildingAction","60513ea9dda8cd1745a1150d9bcbeec7155772ee8e":"updateBuildingStatus","605a63f90a27ea54c55f6e4c5f8f4f011e1b337bee":"getBuildingsByCompetitionId","607acda03dac0d4d7cf38b97d5478bafacce1db8af":"updateCompetition","607bba3b7039b3a43163cd4a517fcb4b906303a084":"processLoginCallback","60b24ab5dbccb480c13336f04053d80a7723aff5a8":"getBuildingById","60d2d822a8bd46c12f18db482c6be3a8a324a09f47":"handleStaffLogin"} */ __turbopack_context__.s({
    "createCompetition": (()=>createCompetition),
    "deleteBuildingAction": (()=>deleteBuildingAction),
    "deleteCompetition": (()=>deleteCompetition),
    "dismissReportAction": (()=>dismissReportAction),
    "fetchUserSessionForClient": (()=>fetchUserSessionForClient),
    "getActiveWorks": (()=>getActiveWorks),
    "getBuildingById": (()=>getBuildingById),
    "getBuildingsByCompetitionId": (()=>getBuildingsByCompetitionId),
    "getCompetitionById": (()=>getCompetitionById),
    "getCompetitionWithWorks": (()=>getCompetitionWithWorks),
    "getCompetitions": (()=>getCompetitions),
    "getHistoricalCompetitions": (()=>getHistoricalCompetitions),
    "getRawBuildings": (()=>getRawBuildings),
    "getSubmittableCompetitions": (()=>getSubmittableCompetitions),
    "getUserSession": (()=>getUserSession),
    "getUserSubmittedWorks": (()=>getUserSubmittedWorks),
    "handleLoginRedirect": (()=>handleLoginRedirect),
    "handleLogout": (()=>handleLogout),
    "handleStaffLogin": (()=>handleStaffLogin),
    "processLoginCallback": (()=>processLoginCallback),
    "reportBuildingAction": (()=>reportBuildingAction),
    "submitNewBuilding": (()=>submitNewBuilding),
    "submitVote": (()=>submitVote),
    "updateBuildingStatus": (()=>updateBuildingStatus),
    "updateCompetition": (()=>updateCompetition)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$buildings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/buildings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$competitions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/competitions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript) <export default as v4>"); // For generating unique IDs for new buildings
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
// 模拟数据库或持久化存储
let serverBuildings = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$buildings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockBuildings"]
];
const userVotes = {}; // { userId: Set<buildingId> }
let serverCompetitions = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$competitions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockCompetitions"]
];
// 定义一个包含所有受建筑状态变更影响的基础路径的数组
const RELEVANT_BUILDING_PATHS = [
    '/',
    '/history',
    '/admin',
    '/dashboard/my-projects',
    '/vote-analysis',
    '/dashboard/submit'
];
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ handleLoginRedirect(providerType) {
    const redirectUri = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `http://localhost:${process.env.PORT || 9002}/auth/callback`;
    const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/connect.php?act=login&appid=${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_ID"]}&appkey=${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_KEY"]}&type=${providerType}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({
                    msg: '获取登录链接失败，响应无效。'
                }));
            console.error('Error fetching login URL:', errorData);
            return {
                error: errorData.msg || '获取登录链接失败'
            };
        }
        const data = await response.json();
        if (data.code === 0 && data.url) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(data.url);
        } else {
            console.error('Error in login URL response:', data);
            return {
                error: data.msg || '获取登录链接时发生未知错误'
            };
        }
    } catch (error) {
        console.error('Network error fetching login URL:', error);
        return {
            error: '网络错误，无法连接到登录服务'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ processLoginCallback(type, code) {
    const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/connect.php?act=callback&appid=${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_ID"]}&appkey=${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_KEY"]}&type=${type}&code=${code}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({
                    msg: '处理回调失败，响应无效。'
                }));
            console.error('Error fetching user info:', errorData);
            return {
                success: false,
                error: errorData.msg || '处理回调失败'
            };
        }
        const data = await response.json();
        if (data.code === 0 && data.social_uid && data.nickname && data.faceimg) {
            const user = {
                socialUid: data.social_uid,
                nickname: data.nickname,
                faceimg: data.faceimg,
                type: data.type || type,
                accessToken: data.access_token,
                gender: data.gender,
                location: data.location,
                ip: data.ip
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"], JSON.stringify(user), {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                maxAge: 60 * 60 * 24 * 7,
                path: '/'
            });
            return {
                success: true
            };
        } else if (data.code === 2) {
            return {
                success: false,
                error: '登录未完成，请重试。'
            };
        } else {
            console.error('Error in user info response:', data);
            return {
                success: false,
                error: data.msg || '获取用户信息时发生未知错误'
            };
        }
    } catch (error) {
        console.error('Network error fetching user info:', error);
        return {
            success: false,
            error: '网络错误，无法获取用户信息'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ handleStaffLogin(prevState, formData) {
    const username = formData.get('username');
    const password = formData.get('password');
    if (username === 'admin' && password === '123456') {
        const user = {
            socialUid: `staff_${username.toLowerCase()}`,
            nickname: '后台管理员 (STAFF)',
            faceimg: 'https://placehold.co/100x100.png?text=S',
            type: 'staff'
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"], JSON.stringify(user), {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === 'production',
            maxAge: 60 * 60 * 24 * 7,
            path: '/'
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/');
    } else {
        return {
            error: '无效的员工帐户或密码。'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ handleLogout() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"]);
    RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/');
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getUserSession() {
    const sessionCookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"]);
    if (sessionCookie?.value) {
        try {
            return JSON.parse(sessionCookie.value);
        } catch (error) {
            console.error('Error parsing session cookie:', error);
            return null;
        }
    }
    return null;
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ fetchUserSessionForClient() {
    return await getUserSession();
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ submitVote(buildingId) {
    const user = await getUserSession();
    if (!user) {
        return {
            success: false,
            message: '请先登录再投票！'
        };
    }
    const buildingIndex = serverBuildings.findIndex((b)=>b.id === buildingId);
    if (buildingIndex === -1) {
        return {
            success: false,
            message: '建筑不存在！'
        };
    }
    if (serverBuildings[buildingIndex].status !== '有效') {
        return {
            success: false,
            message: '此作品当前状态无法投票。'
        };
    }
    if (!userVotes[user.socialUid]) {
        userVotes[user.socialUid] = new Set();
    }
    const building = serverBuildings[buildingIndex];
    const competitionId = building.competitionId;
    if (userVotes[user.socialUid].has(buildingId)) {
        building.votes -= 1;
        userVotes[user.socialUid].delete(buildingId);
    } else {
        building.votes += 1;
        userVotes[user.socialUid].add(buildingId);
    }
    RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/building/${buildingId}`);
    if (competitionId) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/history/competition/${competitionId}`);
    return {
        success: true,
        message: userVotes[user.socialUid].has(buildingId) ? '投票成功！' : '取消投票成功！',
        newVotes: building.votes
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getRawBuildings(currentUser) {
    let userToCheck = currentUser;
    // Only fetch session if currentUser is strictly undefined (not passed or explicitly null)
    if (currentUser === undefined) {
        userToCheck = await getUserSession();
    }
    const sortedBuildings = [
        ...serverBuildings
    ].sort((a, b)=>{
        const dateA = a.submissionDate ? new Date(a.submissionDate).getTime() : 0;
        const dateB = b.submissionDate ? new Date(b.submissionDate).getTime() : 0;
        return dateB - dateA; // Newest first
    });
    return JSON.parse(JSON.stringify(sortedBuildings.map((b)=>{
        const buildingCopy = {
            ...b
        };
        if (userToCheck && userVotes[userToCheck.socialUid]) {
            buildingCopy.currentUserHasVoted = userVotes[userToCheck.socialUid].has(b.id);
        } else {
            buildingCopy.currentUserHasVoted = false;
        }
        return buildingCopy;
    })));
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getBuildingById(id, currentUser) {
    let userToCheck = currentUser;
    if (currentUser === undefined) {
        userToCheck = await getUserSession();
    }
    const building = serverBuildings.find((b)=>b.id === id);
    if (building) {
        const buildingCopy = JSON.parse(JSON.stringify(building));
        if (userToCheck && userVotes[userToCheck.socialUid] && userVotes[userToCheck.socialUid].has(id)) {
            buildingCopy.currentUserHasVoted = true;
        } else {
            buildingCopy.currentUserHasVoted = false;
        }
        return buildingCopy;
    }
    return undefined;
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getActiveWorks(currentUser) {
    let userToCheck = currentUser;
    if (currentUser === undefined) {
        userToCheck = await getUserSession();
    }
    const competitions = await getCompetitions();
    const activeCompetitionIds = competitions.filter((comp)=>comp.status === '进行中').map((comp)=>comp.id);
    const allBuildings = await getRawBuildings(userToCheck);
    const activeWorks = allBuildings.filter((building)=>building.competitionId && activeCompetitionIds.includes(building.competitionId) && building.status === '有效').sort((a, b)=>b.votes - a.votes);
    return activeWorks;
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getHistoricalCompetitions() {
    const allCompetitions = await getCompetitions();
    const historicalCompetitions = allCompetitions.filter((comp)=>comp.status !== '进行中').sort((a, b)=>{
        if (b.year !== a.year) return b.year - a.year;
        const dateA = new Date(a.startDate).getTime();
        const dateB = new Date(b.startDate).getTime();
        if (dateB !== dateA) return dateB - dateA;
        return a.name.localeCompare(b.name);
    });
    return JSON.parse(JSON.stringify(historicalCompetitions));
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getCompetitionById(competitionId) {
    const competition = serverCompetitions.find((c)=>c.id === competitionId);
    if (competition) {
        return JSON.parse(JSON.stringify(competition));
    }
    return undefined;
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getCompetitionWithWorks(competitionId, currentUser) {
    let userToCheck = currentUser;
    if (currentUser === undefined) {
        userToCheck = await getUserSession();
    }
    const competition = serverCompetitions.find((c)=>c.id === competitionId);
    if (!competition) {
        return undefined;
    }
    const allBuildings = await getRawBuildings(userToCheck);
    const worksForCompetition = allBuildings.filter((building)=>building.competitionId === competitionId).sort((wa, wb)=>wb.votes - wa.votes);
    return JSON.parse(JSON.stringify({
        ...competition,
        works: worksForCompetition
    }));
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateBuildingStatus(buildingId, newStatus) {
    const buildingIndex = serverBuildings.findIndex((b)=>b.id === buildingId);
    if (buildingIndex === -1) {
        return {
            success: false,
            message: '建筑不存在！'
        };
    }
    const oldCompetitionId = serverBuildings[buildingIndex].competitionId;
    serverBuildings[buildingIndex].status = newStatus;
    // If status is changed from '审查中-被举报' to anything else, clear report fields
    if (newStatus !== '审查中-被举报') {
        serverBuildings[buildingIndex].reportReason = undefined;
        serverBuildings[buildingIndex].lastReportedBy = undefined;
        serverBuildings[buildingIndex].lastReportDate = undefined;
    }
    RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/building/${buildingId}`);
    if (oldCompetitionId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/history/competition/${oldCompetitionId}`);
    }
    return {
        success: true,
        message: `作品 "${serverBuildings[buildingIndex].name}" 状态已更新为 "${newStatus}"。`
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteBuildingAction(buildingId) {
    const currentUser = await getUserSession();
    if (!currentUser || currentUser.type !== 'staff') {
        return {
            success: false,
            message: '只有管理员才能删除作品。'
        };
    }
    const buildingIndex = serverBuildings.findIndex((b)=>b.id === buildingId);
    if (buildingIndex === -1) {
        return {
            success: false,
            message: '要删除的作品不存在。'
        };
    }
    const buildingName = serverBuildings[buildingIndex].name;
    const competitionId = serverBuildings[buildingIndex].competitionId;
    serverBuildings.splice(buildingIndex, 1);
    // Also remove votes associated with this building
    Object.keys(userVotes).forEach((userId)=>{
        userVotes[userId].delete(buildingId);
    });
    RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
    if (competitionId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/history/competition/${competitionId}`);
    }
    return {
        success: true,
        message: `作品 "${buildingName}" 已成功删除。`
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getCompetitions() {
    const sortedCompetitions = [
        ...serverCompetitions
    ].sort((a, b)=>{
        if (b.year !== a.year) {
            return b.year - a.year;
        }
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
    return JSON.parse(JSON.stringify(sortedCompetitions));
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSubmittableCompetitions() {
    const allComps = await getCompetitions();
    return allComps.filter((c)=>c.status === '进行中' || c.status === '策划中');
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createCompetition(competitionData) {
    if (!competitionData.name || !competitionData.year || !competitionData.territoryPrefix) {
        return {
            success: false,
            message: '比赛名称、年份和领地前缀不能为空。'
        };
    }
    if (!/^\[.+\]$/.test(competitionData.territoryPrefix)) {
        return {
            success: false,
            message: '领地前缀格式不正确，必须以 "[" 开始并以 "]" 结束。'
        };
    }
    const newId = `comp${serverCompetitions.length + 1}_${Date.now()}`;
    const newCompetition = {
        id: newId,
        name: competitionData.name,
        year: competitionData.year,
        status: competitionData.status,
        startDate: competitionData.startDate,
        endDate: competitionData.endDate,
        description: competitionData.description,
        territoryPrefix: competitionData.territoryPrefix
    };
    serverCompetitions.unshift(newCompetition);
    RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
    return {
        success: true,
        message: '比赛创建成功！',
        competition: newCompetition
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateCompetition(competitionId, competitionData) {
    const competitionIndex = serverCompetitions.findIndex((c)=>c.id === competitionId);
    if (competitionIndex === -1) {
        return {
            success: false,
            message: '比赛不存在！'
        };
    }
    if (competitionData.territoryPrefix && !/^\[.+\]$/.test(competitionData.territoryPrefix)) {
        return {
            success: false,
            message: '领地前缀格式不正确，必须以 "[" 开始并以 "]" 结束。'
        };
    }
    serverCompetitions[competitionIndex] = {
        ...serverCompetitions[competitionIndex],
        ...competitionData,
        ...competitionData.startDate && {
            startDate: competitionData.startDate
        },
        ...competitionData.endDate && {
            endDate: competitionData.endDate
        },
        ...competitionData.territoryPrefix && {
            territoryPrefix: competitionData.territoryPrefix
        }
    };
    RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/history/competition/${competitionId}`);
    return {
        success: true,
        message: '比赛更新成功！',
        competition: serverCompetitions[competitionIndex]
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteCompetition(competitionId) {
    const currentUser = await getUserSession();
    if (!currentUser || currentUser.type !== 'staff') {
        return {
            success: false,
            message: '只有管理员才能删除比赛。'
        };
    }
    const initialLength = serverCompetitions.length;
    serverCompetitions = serverCompetitions.filter((c)=>c.id !== competitionId);
    if (serverCompetitions.length === initialLength) {
        return {
            success: false,
            message: '比赛不存在或删除失败！'
        };
    }
    // Also delete buildings associated with this competition
    serverBuildings = serverBuildings.filter((building)=>{
        if (building.competitionId === competitionId) {
            // Remove votes for this building
            Object.keys(userVotes).forEach((userId)=>{
                userVotes[userId].delete(building.id);
            });
            return false; // Remove building
        }
        return true; // Keep building
    });
    RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/history/competition/${competitionId}`);
    return {
        success: true,
        message: '比赛删除成功，其关联的作品也已一并删除。'
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ submitNewBuilding(formData) {
    const currentUser = await getUserSession();
    if (!currentUser) {
        return {
            success: false,
            message: '请先登录才能提交作品。'
        };
    }
    const competition = serverCompetitions.find((c)=>c.id === formData.competitionId);
    if (!competition) {
        return {
            success: false,
            message: '选择的比赛无效。'
        };
    }
    if (competition.status !== '进行中' && competition.status !== '策划中') {
        return {
            success: false,
            message: `无法向状态为 "${competition.status}" 的比赛提交作品。`
        };
    }
    const newBuilding = {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        name: formData.name,
        author: currentUser.nickname,
        authorSocialUid: currentUser.socialUid,
        description: formData.description,
        imageUrl: formData.imageUrl || `https://placehold.co/800x600.png?text=${encodeURIComponent(formData.name)}`,
        aiHint: formData.aiHint,
        votes: 0,
        size: formData.size,
        territoryIdentifier: formData.territoryIdentifier,
        server: formData.server,
        coordinates: {
            x: formData.coordinateX,
            y: formData.coordinateY,
            z: formData.coordinateZ
        },
        eventEdition: competition.year,
        eventYear: competition.year,
        status: '等待审核',
        competitionId: formData.competitionId,
        submissionDate: new Date().toISOString()
    };
    serverBuildings.unshift(newBuilding);
    RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/history/competition/${formData.competitionId}`);
    return {
        success: true,
        message: '作品提交成功，状态为等待审核。',
        buildingId: newBuilding.id
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getUserSubmittedWorks(currentUser) {
    let userToCheck = currentUser;
    if (currentUser === undefined) {
        userToCheck = await getUserSession();
    }
    if (!userToCheck) {
        return [];
    }
    const allBuildings = await getRawBuildings(userToCheck);
    const userWorks = allBuildings.filter((building)=>building.authorSocialUid === userToCheck.socialUid).sort((a, b)=>{
        const dateA = a.submissionDate ? new Date(a.submissionDate).getTime() : 0;
        const dateB = b.submissionDate ? new Date(b.submissionDate).getTime() : 0;
        return dateB - dateA;
    });
    return userWorks;
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getBuildingsByCompetitionId(competitionId, currentUser) {
    let userToCheck = currentUser;
    if (currentUser === undefined) {
        userToCheck = await getUserSession();
    }
    const allBuildings = await getRawBuildings(userToCheck);
    return allBuildings.filter((building)=>building.competitionId === competitionId).sort((a, b)=>b.votes - a.votes);
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ reportBuildingAction(buildingId, reason) {
    const currentUser = await getUserSession();
    if (!currentUser) {
        return {
            success: false,
            message: '请先登录才能举报作品。'
        };
    }
    if (!reason || reason.trim().length < 10) {
        return {
            success: false,
            message: '举报原因不能为空，且至少需要10个字符。'
        };
    }
    const buildingIndex = serverBuildings.findIndex((b)=>b.id === buildingId);
    if (buildingIndex === -1) {
        return {
            success: false,
            message: '要举报的作品不存在。'
        };
    }
    const building = serverBuildings[buildingIndex];
    if (building.status === '审查中-被举报' || building.status === '违规' || building.status === '作弊' || building.status === '无效') {
        return {
            success: false,
            message: `作品 "${building.name}" 当前状态 (${building.status}) 无法重复举报或已处理。`
        };
    }
    const oldStatus = building.status;
    serverBuildings[buildingIndex].status = '审查中-被举报';
    serverBuildings[buildingIndex].reportReason = reason;
    serverBuildings[buildingIndex].lastReportedBy = currentUser.socialUid;
    serverBuildings[buildingIndex].lastReportDate = new Date().toISOString();
    console.log(`[举报模拟] 作品 "${building.name}" (ID: ${building.id}) 已被用户 ${currentUser.nickname} (ID: ${currentUser.socialUid}) 举报。原状态: ${oldStatus}, 作者: ${building.author} (ID: ${building.authorSocialUid})。原因: ${reason}`);
    RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
    if (building.competitionId) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/history/competition/${building.competitionId}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/building/${building.id}`);
    if (building.authorSocialUid === currentUser.socialUid) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/my-projects');
    }
    return {
        success: true,
        message: `作品 "${building.name}" 已举报成功，等待管理员审核。`
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ dismissReportAction(buildingId) {
    const currentUser = await getUserSession();
    if (!currentUser || currentUser.type !== 'staff') {
        return {
            success: false,
            message: '只有管理员才能执行此操作。'
        };
    }
    const buildingIndex = serverBuildings.findIndex((b)=>b.id === buildingId);
    if (buildingIndex === -1) {
        return {
            success: false,
            message: '作品不存在。'
        };
    }
    const building = serverBuildings[buildingIndex];
    if (building.status !== '审查中-被举报') {
        return {
            success: false,
            message: `作品 "${building.name}" 当前不处于“审查中-被举报”状态。`
        };
    }
    serverBuildings[buildingIndex].status = '有效';
    serverBuildings[buildingIndex].reportReason = undefined;
    serverBuildings[buildingIndex].lastReportedBy = undefined;
    serverBuildings[buildingIndex].lastReportDate = undefined;
    const affectedBuilding = serverBuildings[buildingIndex];
    RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
    if (affectedBuilding.competitionId) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/history/competition/${affectedBuilding.competitionId}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/building/${affectedBuilding.id}`);
    return {
        success: true,
        message: `作品 "${affectedBuilding.name}" 的举报已被撤销，状态已恢复为“有效”。`
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    handleLoginRedirect,
    processLoginCallback,
    handleStaffLogin,
    handleLogout,
    getUserSession,
    fetchUserSessionForClient,
    submitVote,
    getRawBuildings,
    getBuildingById,
    getActiveWorks,
    getHistoricalCompetitions,
    getCompetitionById,
    getCompetitionWithWorks,
    updateBuildingStatus,
    deleteBuildingAction,
    getCompetitions,
    getSubmittableCompetitions,
    createCompetition,
    updateCompetition,
    deleteCompetition,
    submitNewBuilding,
    getUserSubmittedWorks,
    getBuildingsByCompetitionId,
    reportBuildingAction,
    dismissReportAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(handleLoginRedirect, "403eadd05e4274e25f43462da6774833b55e6f2f87", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(processLoginCallback, "607bba3b7039b3a43163cd4a517fcb4b906303a084", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(handleStaffLogin, "60d2d822a8bd46c12f18db482c6be3a8a324a09f47", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(handleLogout, "00924a3e4b3549f137af9ec57358120be960cd01d8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserSession, "006769990f4d29db3d9642a057b6c38a9af6f7f32c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchUserSessionForClient, "0071299063e7df5bc8205002c8d01f32d097bf28eb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitVote, "407f93716e27995cc8830e1f1d5ff2e0c2a84dc3e8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRawBuildings, "40444a9b508884d641eff34582900ccddb872a70cb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBuildingById, "60b24ab5dbccb480c13336f04053d80a7723aff5a8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getActiveWorks, "40ce9bdb447cffe92dcd2aee716fbfa0e477608bc5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHistoricalCompetitions, "004874233f0821a8a963583307ba771b5b0f697bc7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCompetitionById, "4017a5edd4ad103bdcfc14fce39434d645da119f55", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCompetitionWithWorks, "6021c49044ee325d074326b779c603c0a1070e03ba", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBuildingStatus, "60513ea9dda8cd1745a1150d9bcbeec7155772ee8e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBuildingAction, "40ffef2c295b771509830a5d640f1c6fc4cc1782ef", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCompetitions, "00b53290c574162d521b2261cba165a710273a3676", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSubmittableCompetitions, "000f9c3d737d6b103cc8eb48b63b334a5c578367c2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCompetition, "40879a9ed5d6d88b171cdf9253f357fb32f3c77043", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCompetition, "607acda03dac0d4d7cf38b97d5478bafacce1db8af", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCompetition, "40bd91dfe39c11ef19064625013e11e94fb027dc2a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitNewBuilding, "407758c31142994f61ad4a8f497bcd12b3f60f5b0b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserSubmittedWorks, "40aa70e21df6d39915afc256fe458eddce4d328fea", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBuildingsByCompetitionId, "605a63f90a27ea54c55f6e4c5f8f4f011e1b337bee", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(reportBuildingAction, "604dfa2b493bc34c6cf943fe7c0f0210f2a9d90a0e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(dismissReportAction, "4006d538def970e4cd9a3c4d27015b01e42ca4a958", null);
}}),
"[project]/.next-internal/server/app/dashboard/submit/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/.next-internal/server/app/dashboard/submit/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/submit/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/dashboard/submit/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "000f9c3d737d6b103cc8eb48b63b334a5c578367c2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSubmittableCompetitions"]),
    "004874233f0821a8a963583307ba771b5b0f697bc7": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHistoricalCompetitions"]),
    "006769990f4d29db3d9642a057b6c38a9af6f7f32c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserSession"]),
    "0071299063e7df5bc8205002c8d01f32d097bf28eb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchUserSessionForClient"]),
    "00924a3e4b3549f137af9ec57358120be960cd01d8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleLogout"]),
    "00b53290c574162d521b2261cba165a710273a3676": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCompetitions"]),
    "4006d538def970e4cd9a3c4d27015b01e42ca4a958": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dismissReportAction"]),
    "4017a5edd4ad103bdcfc14fce39434d645da119f55": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCompetitionById"]),
    "403eadd05e4274e25f43462da6774833b55e6f2f87": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleLoginRedirect"]),
    "40444a9b508884d641eff34582900ccddb872a70cb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRawBuildings"]),
    "407758c31142994f61ad4a8f497bcd12b3f60f5b0b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitNewBuilding"]),
    "407f93716e27995cc8830e1f1d5ff2e0c2a84dc3e8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitVote"]),
    "40879a9ed5d6d88b171cdf9253f357fb32f3c77043": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCompetition"]),
    "40aa70e21df6d39915afc256fe458eddce4d328fea": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserSubmittedWorks"]),
    "40bd91dfe39c11ef19064625013e11e94fb027dc2a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCompetition"]),
    "40ce9bdb447cffe92dcd2aee716fbfa0e477608bc5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActiveWorks"]),
    "40ffef2c295b771509830a5d640f1c6fc4cc1782ef": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBuildingAction"]),
    "6021c49044ee325d074326b779c603c0a1070e03ba": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCompetitionWithWorks"]),
    "604dfa2b493bc34c6cf943fe7c0f0210f2a9d90a0e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reportBuildingAction"]),
    "60513ea9dda8cd1745a1150d9bcbeec7155772ee8e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBuildingStatus"]),
    "605a63f90a27ea54c55f6e4c5f8f4f011e1b337bee": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBuildingsByCompetitionId"]),
    "607acda03dac0d4d7cf38b97d5478bafacce1db8af": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCompetition"]),
    "607bba3b7039b3a43163cd4a517fcb4b906303a084": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processLoginCallback"]),
    "60b24ab5dbccb480c13336f04053d80a7723aff5a8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBuildingById"]),
    "60d2d822a8bd46c12f18db482c6be3a8a324a09f47": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleStaffLogin"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/submit/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/dashboard/submit/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "000f9c3d737d6b103cc8eb48b63b334a5c578367c2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["000f9c3d737d6b103cc8eb48b63b334a5c578367c2"]),
    "004874233f0821a8a963583307ba771b5b0f697bc7": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["004874233f0821a8a963583307ba771b5b0f697bc7"]),
    "006769990f4d29db3d9642a057b6c38a9af6f7f32c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["006769990f4d29db3d9642a057b6c38a9af6f7f32c"]),
    "0071299063e7df5bc8205002c8d01f32d097bf28eb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0071299063e7df5bc8205002c8d01f32d097bf28eb"]),
    "00924a3e4b3549f137af9ec57358120be960cd01d8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00924a3e4b3549f137af9ec57358120be960cd01d8"]),
    "00b53290c574162d521b2261cba165a710273a3676": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00b53290c574162d521b2261cba165a710273a3676"]),
    "4006d538def970e4cd9a3c4d27015b01e42ca4a958": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["4006d538def970e4cd9a3c4d27015b01e42ca4a958"]),
    "4017a5edd4ad103bdcfc14fce39434d645da119f55": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["4017a5edd4ad103bdcfc14fce39434d645da119f55"]),
    "403eadd05e4274e25f43462da6774833b55e6f2f87": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["403eadd05e4274e25f43462da6774833b55e6f2f87"]),
    "40444a9b508884d641eff34582900ccddb872a70cb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40444a9b508884d641eff34582900ccddb872a70cb"]),
    "407758c31142994f61ad4a8f497bcd12b3f60f5b0b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["407758c31142994f61ad4a8f497bcd12b3f60f5b0b"]),
    "407f93716e27995cc8830e1f1d5ff2e0c2a84dc3e8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["407f93716e27995cc8830e1f1d5ff2e0c2a84dc3e8"]),
    "40879a9ed5d6d88b171cdf9253f357fb32f3c77043": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40879a9ed5d6d88b171cdf9253f357fb32f3c77043"]),
    "40aa70e21df6d39915afc256fe458eddce4d328fea": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40aa70e21df6d39915afc256fe458eddce4d328fea"]),
    "40bd91dfe39c11ef19064625013e11e94fb027dc2a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40bd91dfe39c11ef19064625013e11e94fb027dc2a"]),
    "40ce9bdb447cffe92dcd2aee716fbfa0e477608bc5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40ce9bdb447cffe92dcd2aee716fbfa0e477608bc5"]),
    "40ffef2c295b771509830a5d640f1c6fc4cc1782ef": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40ffef2c295b771509830a5d640f1c6fc4cc1782ef"]),
    "6021c49044ee325d074326b779c603c0a1070e03ba": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["6021c49044ee325d074326b779c603c0a1070e03ba"]),
    "604dfa2b493bc34c6cf943fe7c0f0210f2a9d90a0e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["604dfa2b493bc34c6cf943fe7c0f0210f2a9d90a0e"]),
    "60513ea9dda8cd1745a1150d9bcbeec7155772ee8e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60513ea9dda8cd1745a1150d9bcbeec7155772ee8e"]),
    "605a63f90a27ea54c55f6e4c5f8f4f011e1b337bee": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["605a63f90a27ea54c55f6e4c5f8f4f011e1b337bee"]),
    "607acda03dac0d4d7cf38b97d5478bafacce1db8af": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["607acda03dac0d4d7cf38b97d5478bafacce1db8af"]),
    "607bba3b7039b3a43163cd4a517fcb4b906303a084": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["607bba3b7039b3a43163cd4a517fcb4b906303a084"]),
    "60b24ab5dbccb480c13336f04053d80a7723aff5a8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60b24ab5dbccb480c13336f04053d80a7723aff5a8"]),
    "60d2d822a8bd46c12f18db482c6be3a8a324a09f47": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60d2d822a8bd46c12f18db482c6be3a8a324a09f47"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/submit/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/submit/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/dashboard/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/dashboard/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/dashboard/submit/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/dashboard/submit/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/dashboard/submit/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/dashboard/submit/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/dashboard/submit/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/dashboard/submit/page.tsx", "default");
}}),
"[project]/src/app/dashboard/submit/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$submit$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/dashboard/submit/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$submit$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/submit/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$submit$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/dashboard/submit/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/dashboard/submit/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__fff2c38d._.js.map