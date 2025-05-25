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
        status: '违规',
        competitionId: 'comp2',
        submissionDate: '2024-06-10T10:00:00Z'
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
        description: '2023年度的盛大建筑活动，涌现了许多优秀作品。'
    },
    {
        id: 'comp2',
        name: '2024夏季创意赛',
        year: 2024,
        status: '进行中',
        startDate: '2024-06-01',
        endDate: '2024-08-31',
        description: '以“清凉夏日”为主题，发挥无限创意，搭建梦想中的夏日乐园。'
    },
    {
        id: 'comp3',
        name: '2025未来城市设计挑战',
        year: 2025,
        status: '策划中',
        startDate: '2025-01-15',
        endDate: '2025-04-15',
        description: '探索未来城市的可持续发展与创新建筑设计理念。'
    },
    {
        id: 'comp4',
        name: '中世纪幻想主题赛',
        year: 2024,
        status: '评审中',
        startDate: '2024-03-01',
        endDate: '2024-05-31',
        description: '重现中世纪的城堡、村庄与神秘传说。'
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
/* __next_internal_action_entry_do_not_use__ {"000f9c3d737d6b103cc8eb48b63b334a5c578367c2":"getSubmittableCompetitions","00444a9b508884d641eff34582900ccddb872a70cb":"getRawBuildings","006769990f4d29db3d9642a057b6c38a9af6f7f32c":"getUserSession","0071299063e7df5bc8205002c8d01f32d097bf28eb":"fetchUserSessionForClient","00924a3e4b3549f137af9ec57358120be960cd01d8":"handleLogout","00aa70e21df6d39915afc256fe458eddce4d328fea":"getUserSubmittedWorks","00b53290c574162d521b2261cba165a710273a3676":"getCompetitions","403eadd05e4274e25f43462da6774833b55e6f2f87":"handleLoginRedirect","407758c31142994f61ad4a8f497bcd12b3f60f5b0b":"submitNewBuilding","407f93716e27995cc8830e1f1d5ff2e0c2a84dc3e8":"submitVote","40879a9ed5d6d88b171cdf9253f357fb32f3c77043":"createCompetition","40bd91dfe39c11ef19064625013e11e94fb027dc2a":"deleteCompetition","40ce9bdb447cffe92dcd2aee716fbfa0e477608bc5":"getActiveWorks","40ffd345da1ee8ed3ad262d7d91de5b18b0eb1399a":"getHistoricalWorksGroupedByCompetition","60513ea9dda8cd1745a1150d9bcbeec7155772ee8e":"updateBuildingStatus","607acda03dac0d4d7cf38b97d5478bafacce1db8af":"updateCompetition","607bba3b7039b3a43163cd4a517fcb4b906303a084":"processLoginCallback","60b24ab5dbccb480c13336f04053d80a7723aff5a8":"getBuildingById","60d2d822a8bd46c12f18db482c6be3a8a324a09f47":"handleStaffLogin"} */ __turbopack_context__.s({
    "createCompetition": (()=>createCompetition),
    "deleteCompetition": (()=>deleteCompetition),
    "fetchUserSessionForClient": (()=>fetchUserSessionForClient),
    "getActiveWorks": (()=>getActiveWorks),
    "getBuildingById": (()=>getBuildingById),
    "getCompetitions": (()=>getCompetitions),
    "getHistoricalWorksGroupedByCompetition": (()=>getHistoricalWorksGroupedByCompetition),
    "getRawBuildings": (()=>getRawBuildings),
    "getSubmittableCompetitions": (()=>getSubmittableCompetitions),
    "getUserSession": (()=>getUserSession),
    "getUserSubmittedWorks": (()=>getUserSubmittedWorks),
    "handleLoginRedirect": (()=>handleLoginRedirect),
    "handleLogout": (()=>handleLogout),
    "handleStaffLogin": (()=>handleStaffLogin),
    "processLoginCallback": (()=>processLoginCallback),
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
    if (userVotes[user.socialUid].has(buildingId)) {
        return {
            success: false,
            message: '您已经投过票了！'
        };
    }
    serverBuildings[buildingIndex].votes += 1;
    userVotes[user.socialUid].add(buildingId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/history');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/building/${buildingId}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/my-projects');
    return {
        success: true,
        message: '投票成功！',
        newVotes: serverBuildings[buildingIndex].votes
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getRawBuildings() {
    return JSON.parse(JSON.stringify(serverBuildings));
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getBuildingById(id, currentUser) {
    let userToCheck = currentUser;
    if (!userToCheck) {
        userToCheck = await getUserSession(); // Fetch if not provided
    }
    const building = serverBuildings.find((b)=>b.id === id);
    if (building) {
        const buildingCopy = JSON.parse(JSON.stringify(building));
        if (userToCheck && userVotes[userToCheck.socialUid]) {
            buildingCopy.currentUserHasVoted = userVotes[userToCheck.socialUid].has(id);
        } else {
            buildingCopy.currentUserHasVoted = false;
        }
        return buildingCopy;
    }
    return undefined;
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getActiveWorks(currentUser) {
    let userToCheck = currentUser;
    if (!userToCheck) {
        userToCheck = await getUserSession();
    }
    const competitions = await getCompetitions();
    const activeCompetitionIds = competitions.filter((comp)=>comp.status === '进行中').map((comp)=>comp.id);
    const activeWorks = serverBuildings.filter((building)=>building.competitionId && activeCompetitionIds.includes(building.competitionId) && building.status === '有效').sort((a, b)=>b.votes - a.votes).map((b)=>{
        const buildingCopy = JSON.parse(JSON.stringify(b));
        if (userToCheck && userVotes[userToCheck.socialUid]) {
            buildingCopy.currentUserHasVoted = userVotes[userToCheck.socialUid].has(b.id);
        } else {
            buildingCopy.currentUserHasVoted = false;
        }
        return buildingCopy;
    });
    return activeWorks;
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getHistoricalWorksGroupedByCompetition(currentUser) {
    let userToCheck = currentUser;
    if (!userToCheck) {
        userToCheck = await getUserSession();
    }
    const allCompetitions = await getCompetitions();
    const allBuildings = await getRawBuildings();
    const historicalCompetitionsData = allCompetitions.filter((comp)=>comp.status !== '进行中').sort((a, b)=>{
        if (b.year !== a.year) return b.year - a.year;
        const dateA = new Date(a.startDate).getTime();
        const dateB = new Date(b.startDate).getTime();
        if (dateB !== dateA) return dateB - dateA;
        return a.name.localeCompare(b.name);
    });
    const groupedWorks = historicalCompetitionsData.map((comp)=>{
        const worksForCompetition = allBuildings.filter((building)=>building.competitionId === comp.id).sort((wa, wb)=>wb.votes - wa.votes).map((wb)=>{
            const buildingCopy = JSON.parse(JSON.stringify(wb));
            if (userToCheck && userVotes[userToCheck.socialUid]) {
                buildingCopy.currentUserHasVoted = userVotes[userToCheck.socialUid].has(wb.id);
            } else {
                buildingCopy.currentUserHasVoted = false;
            }
            return buildingCopy;
        });
        return {
            ...comp,
            works: worksForCompetition
        };
    });
    return groupedWorks;
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateBuildingStatus(buildingId, newStatus) {
    const buildingIndex = serverBuildings.findIndex((b)=>b.id === buildingId);
    if (buildingIndex === -1) {
        return {
            success: false,
            message: '建筑不存在！'
        };
    }
    serverBuildings[buildingIndex].status = newStatus;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/history');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/building/${buildingId}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/my-projects');
    return {
        success: true,
        message: `作品 "${serverBuildings[buildingIndex].name}" 状态已更新为 "${newStatus}"。`
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getCompetitions() {
    return JSON.parse(JSON.stringify(serverCompetitions));
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSubmittableCompetitions() {
    const allComps = await getCompetitions();
    return allComps.filter((c)=>c.status === '进行中' || c.status === '策划中');
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createCompetition(competitionData) {
    if (!competitionData.name || !competitionData.year) {
        return {
            success: false,
            message: '比赛名称和年份不能为空。'
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
        description: competitionData.description
    };
    serverCompetitions.unshift(newCompetition);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/history');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/submit'); // For competition list in submission form
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
    serverCompetitions[competitionIndex] = {
        ...serverCompetitions[competitionIndex],
        ...competitionData
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/history');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/submit');
    return {
        success: true,
        message: '比赛更新成功！',
        competition: serverCompetitions[competitionIndex]
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteCompetition(competitionId) {
    const initialLength = serverCompetitions.length;
    serverCompetitions = serverCompetitions.filter((c)=>c.id !== competitionId);
    if (serverCompetitions.length === initialLength) {
        return {
            success: false,
            message: '比赛不存在或删除失败！'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/history');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/submit');
    return {
        success: true,
        message: '比赛删除成功！'
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
    serverBuildings.unshift(newBuilding); // Add to the beginning of the array
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/history');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin'); // Admin should see new submissions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/my-projects');
    return {
        success: true,
        message: '作品提交成功，状态为等待审核。',
        buildingId: newBuilding.id
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getUserSubmittedWorks() {
    const currentUser = await getUserSession();
    if (!currentUser) {
        return [];
    }
    const userWorks = serverBuildings.filter((building)=>building.authorSocialUid === currentUser.socialUid).sort((a, b)=>new Date(b.submissionDate).getTime() - new Date(a.submissionDate).getTime()) // Sort by newest first
    .map((b)=>{
        const buildingCopy = JSON.parse(JSON.stringify(b));
        if (currentUser && userVotes[currentUser.socialUid]) {
            buildingCopy.currentUserHasVoted = userVotes[currentUser.socialUid].has(b.id);
        } else {
            buildingCopy.currentUserHasVoted = false;
        }
        return buildingCopy;
    });
    return userWorks;
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
    getHistoricalWorksGroupedByCompetition,
    updateBuildingStatus,
    getCompetitions,
    getSubmittableCompetitions,
    createCompetition,
    updateCompetition,
    deleteCompetition,
    submitNewBuilding,
    getUserSubmittedWorks
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(handleLoginRedirect, "403eadd05e4274e25f43462da6774833b55e6f2f87", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(processLoginCallback, "607bba3b7039b3a43163cd4a517fcb4b906303a084", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(handleStaffLogin, "60d2d822a8bd46c12f18db482c6be3a8a324a09f47", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(handleLogout, "00924a3e4b3549f137af9ec57358120be960cd01d8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserSession, "006769990f4d29db3d9642a057b6c38a9af6f7f32c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchUserSessionForClient, "0071299063e7df5bc8205002c8d01f32d097bf28eb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitVote, "407f93716e27995cc8830e1f1d5ff2e0c2a84dc3e8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRawBuildings, "00444a9b508884d641eff34582900ccddb872a70cb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBuildingById, "60b24ab5dbccb480c13336f04053d80a7723aff5a8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getActiveWorks, "40ce9bdb447cffe92dcd2aee716fbfa0e477608bc5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHistoricalWorksGroupedByCompetition, "40ffd345da1ee8ed3ad262d7d91de5b18b0eb1399a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBuildingStatus, "60513ea9dda8cd1745a1150d9bcbeec7155772ee8e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCompetitions, "00b53290c574162d521b2261cba165a710273a3676", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSubmittableCompetitions, "000f9c3d737d6b103cc8eb48b63b334a5c578367c2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCompetition, "40879a9ed5d6d88b171cdf9253f357fb32f3c77043", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCompetition, "607acda03dac0d4d7cf38b97d5478bafacce1db8af", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCompetition, "40bd91dfe39c11ef19064625013e11e94fb027dc2a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitNewBuilding, "407758c31142994f61ad4a8f497bcd12b3f60f5b0b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserSubmittedWorks, "00aa70e21df6d39915afc256fe458eddce4d328fea", null);
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
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
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "000f9c3d737d6b103cc8eb48b63b334a5c578367c2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSubmittableCompetitions"]),
    "00444a9b508884d641eff34582900ccddb872a70cb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRawBuildings"]),
    "006769990f4d29db3d9642a057b6c38a9af6f7f32c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserSession"]),
    "0071299063e7df5bc8205002c8d01f32d097bf28eb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchUserSessionForClient"]),
    "00924a3e4b3549f137af9ec57358120be960cd01d8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleLogout"]),
    "00aa70e21df6d39915afc256fe458eddce4d328fea": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserSubmittedWorks"]),
    "00b53290c574162d521b2261cba165a710273a3676": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCompetitions"]),
    "403eadd05e4274e25f43462da6774833b55e6f2f87": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleLoginRedirect"]),
    "407758c31142994f61ad4a8f497bcd12b3f60f5b0b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitNewBuilding"]),
    "407f93716e27995cc8830e1f1d5ff2e0c2a84dc3e8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitVote"]),
    "40879a9ed5d6d88b171cdf9253f357fb32f3c77043": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCompetition"]),
    "40bd91dfe39c11ef19064625013e11e94fb027dc2a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCompetition"]),
    "40ce9bdb447cffe92dcd2aee716fbfa0e477608bc5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActiveWorks"]),
    "40ffd345da1ee8ed3ad262d7d91de5b18b0eb1399a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHistoricalWorksGroupedByCompetition"]),
    "60513ea9dda8cd1745a1150d9bcbeec7155772ee8e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBuildingStatus"]),
    "607acda03dac0d4d7cf38b97d5478bafacce1db8af": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCompetition"]),
    "607bba3b7039b3a43163cd4a517fcb4b906303a084": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processLoginCallback"]),
    "60b24ab5dbccb480c13336f04053d80a7723aff5a8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBuildingById"]),
    "60d2d822a8bd46c12f18db482c6be3a8a324a09f47": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleStaffLogin"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "000f9c3d737d6b103cc8eb48b63b334a5c578367c2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["000f9c3d737d6b103cc8eb48b63b334a5c578367c2"]),
    "00444a9b508884d641eff34582900ccddb872a70cb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00444a9b508884d641eff34582900ccddb872a70cb"]),
    "006769990f4d29db3d9642a057b6c38a9af6f7f32c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["006769990f4d29db3d9642a057b6c38a9af6f7f32c"]),
    "0071299063e7df5bc8205002c8d01f32d097bf28eb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0071299063e7df5bc8205002c8d01f32d097bf28eb"]),
    "00924a3e4b3549f137af9ec57358120be960cd01d8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00924a3e4b3549f137af9ec57358120be960cd01d8"]),
    "00aa70e21df6d39915afc256fe458eddce4d328fea": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00aa70e21df6d39915afc256fe458eddce4d328fea"]),
    "00b53290c574162d521b2261cba165a710273a3676": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00b53290c574162d521b2261cba165a710273a3676"]),
    "403eadd05e4274e25f43462da6774833b55e6f2f87": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["403eadd05e4274e25f43462da6774833b55e6f2f87"]),
    "407758c31142994f61ad4a8f497bcd12b3f60f5b0b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["407758c31142994f61ad4a8f497bcd12b3f60f5b0b"]),
    "407f93716e27995cc8830e1f1d5ff2e0c2a84dc3e8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["407f93716e27995cc8830e1f1d5ff2e0c2a84dc3e8"]),
    "40879a9ed5d6d88b171cdf9253f357fb32f3c77043": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40879a9ed5d6d88b171cdf9253f357fb32f3c77043"]),
    "40bd91dfe39c11ef19064625013e11e94fb027dc2a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40bd91dfe39c11ef19064625013e11e94fb027dc2a"]),
    "40ce9bdb447cffe92dcd2aee716fbfa0e477608bc5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40ce9bdb447cffe92dcd2aee716fbfa0e477608bc5"]),
    "40ffd345da1ee8ed3ad262d7d91de5b18b0eb1399a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40ffd345da1ee8ed3ad262d7d91de5b18b0eb1399a"]),
    "60513ea9dda8cd1745a1150d9bcbeec7155772ee8e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60513ea9dda8cd1745a1150d9bcbeec7155772ee8e"]),
    "607acda03dac0d4d7cf38b97d5478bafacce1db8af": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["607acda03dac0d4d7cf38b97d5478bafacce1db8af"]),
    "607bba3b7039b3a43163cd4a517fcb4b906303a084": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["607bba3b7039b3a43163cd4a517fcb4b906303a084"]),
    "60b24ab5dbccb480c13336f04053d80a7723aff5a8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60b24ab5dbccb480c13336f04053d80a7723aff5a8"]),
    "60d2d822a8bd46c12f18db482c6be3a8a324a09f47": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60d2d822a8bd46c12f18db482c6be3a8a324a09f47"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/src/components/minecraft/BuildingCard.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/minecraft/BuildingCard.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/minecraft/BuildingCard.tsx <module evaluation>", "default");
}}),
"[project]/src/components/minecraft/BuildingCard.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/minecraft/BuildingCard.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/minecraft/BuildingCard.tsx", "default");
}}),
"[project]/src/components/minecraft/BuildingCard.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$minecraft$2f$BuildingCard$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/minecraft/BuildingCard.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$minecraft$2f$BuildingCard$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/minecraft/BuildingCard.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$minecraft$2f$BuildingCard$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage),
    "dynamic": (()=>dynamic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$minecraft$2f$BuildingCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/minecraft/BuildingCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)"); // Added getCompetitions
;
;
;
const dynamic = 'force-dynamic';
async function HomePage() {
    // For now, let's display competitions as cards on the homepage as per the screenshot's likely intent for "所有活动"
    // Later, this can be refined to show actual "works" or a mix.
    const competitions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCompetitions"])(); // Fetch all competitions
    const currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserSession"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold text-foreground tracking-tight",
                children: "所有活动"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            competitions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6",
                children: competitions.map((competition)=>// Pass competition to BuildingCard. BuildingCard will adapt to show competition info.
                    // We use building prop with a placeholder building object for now, or adapt BuildingCard further.
                    // For simplicity, I'm assuming BuildingCard can take a competition prop directly (will update BuildingCard).
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$minecraft$2f$BuildingCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        // This is a temporary structure, BuildingCard needs to be adapted to primarily show competition
                        // or we need a new CompetitionCard. For now, let's adapt BuildingCard.
                        building: {
                            id: competition.id,
                            name: competition.name,
                            description: competition.description || '暂无描述',
                            imageUrl: `https://placehold.co/600x338.png?text=${encodeURIComponent(competition.name)}`,
                            status: '有效',
                            // Other Building fields that might be needed by CardWrapper or VoteButton if not handled
                            author: '活动主办方',
                            votes: 0,
                            size: '中型',
                            territoryIdentifier: '',
                            server: '',
                            coordinates: {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            eventEdition: competition.year,
                            eventYear: competition.year,
                            competitionId: competition.id
                        },
                        competition: competition,
                        currentUser: currentUser
                    }, competition.id, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-muted-foreground text-lg py-10",
                children: "当前暂无活动。敬请期待！"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__3263832b._.js.map