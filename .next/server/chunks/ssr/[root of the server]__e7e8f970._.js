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
"[externals]/@prisma/client [external] (@prisma/client, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[project]/src/lib/db.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "prisma": (()=>prisma)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prisma = global.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
});
if ("TURBOPACK compile-time truthy", 1) {
    global.prisma = prisma;
}
const __TURBOPACK__default__export__ = prisma;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)"); // Import Prisma client
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const RELEVANT_BUILDING_PATHS = [
    '/',
    '/history',
    '/admin',
    '/dashboard/my-projects',
    '/vote-analysis',
    '/dashboard/submit'
];
function serializeDates(data) {
    if (data === null || data === undefined) {
        return data;
    }
    if (typeof data === 'object') {
        if (Array.isArray(data)) {
            return data.map((item)=>serializeDates(item));
        }
        const newData = {};
        for(const key in data){
            const value = data[key];
            if (value instanceof Date) {
                newData[key] = value.toISOString();
            } else if (typeof value === 'object') {
                newData[key] = serializeDates(value);
            } else {
                newData[key] = value;
            }
        }
        return newData;
    }
    return data;
}
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
    const building = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.findUnique({
        where: {
            id: buildingId
        }
    });
    if (!building) {
        return {
            success: false,
            message: '建筑不存在！'
        };
    }
    if (building.status !== '有效') {
        return {
            success: false,
            message: '此作品当前状态无法投票。'
        };
    }
    const existingVote = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userVote.findUnique({
        where: {
            userId_buildingId: {
                userId: user.socialUid,
                buildingId
            }
        }
    });
    let newVoteCount;
    let message;
    try {
        if (existingVote) {
            // Unvote
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userVote.delete({
                    where: {
                        userId_buildingId: {
                            userId: user.socialUid,
                            buildingId
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.update({
                    where: {
                        id: buildingId
                    },
                    data: {
                        votes: {
                            decrement: 1
                        }
                    }
                })
            ]);
            newVoteCount = building.votes - 1;
            message = '取消投票成功！';
        } else {
            // Vote
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userVote.create({
                    data: {
                        userId: user.socialUid,
                        buildingId
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.update({
                    where: {
                        id: buildingId
                    },
                    data: {
                        votes: {
                            increment: 1
                        }
                    }
                })
            ]);
            newVoteCount = building.votes + 1;
            message = '投票成功！';
        }
        RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/building/${buildingId}`);
        if (building.competitionId) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/history/competition/${building.competitionId}`);
        return {
            success: true,
            message,
            newVotes: newVoteCount
        };
    } catch (error) {
        console.error("Error submitting vote:", error);
        return {
            success: false,
            message: '投票操作失败，请稍后再试。'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getRawBuildings(currentUserParam) {
    let currentUser = currentUserParam;
    if (currentUser === undefined) {
        currentUser = await getUserSession();
    }
    const buildingsFromDb = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.findMany({
        orderBy: {
            submissionDate: 'desc'
        }
    });
    let userVotesForBuildings = [];
    if (currentUser) {
        const votes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userVote.findMany({
            where: {
                userId: currentUser.socialUid,
                buildingId: {
                    in: buildingsFromDb.map((b)=>b.id)
                }
            },
            select: {
                buildingId: true
            }
        });
        userVotesForBuildings = votes.map((v)=>v.buildingId);
    }
    const buildings = buildingsFromDb.map((b)=>({
            ...b,
            submissionDate: b.submissionDate?.toISOString(),
            lastReportDate: b.lastReportDate?.toISOString(),
            createdAt: b.createdAt.toISOString(),
            updatedAt: b.updatedAt.toISOString(),
            currentUserHasVoted: currentUser ? userVotesForBuildings.includes(b.id) : false
        }));
    return serializeDates(buildings);
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getBuildingById(id, currentUserParam) {
    let currentUser = currentUserParam;
    if (currentUser === undefined) {
        currentUser = await getUserSession();
    }
    const buildingFromDb = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.findUnique({
        where: {
            id
        }
    });
    if (buildingFromDb) {
        let currentUserHasVoted = false;
        if (currentUser) {
            const vote = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userVote.findUnique({
                where: {
                    userId_buildingId: {
                        userId: currentUser.socialUid,
                        buildingId: id
                    }
                }
            });
            currentUserHasVoted = !!vote;
        }
        const building = {
            ...buildingFromDb,
            submissionDate: buildingFromDb.submissionDate?.toISOString(),
            lastReportDate: buildingFromDb.lastReportDate?.toISOString(),
            createdAt: buildingFromDb.createdAt.toISOString(),
            updatedAt: buildingFromDb.updatedAt.toISOString(),
            currentUserHasVoted
        };
        return serializeDates(building);
    }
    return undefined;
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getActiveWorks(currentUserParam) {
    let currentUser = currentUserParam;
    if (currentUser === undefined) {
        currentUser = await getUserSession();
    }
    const activeCompetitions = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].competition.findMany({
        where: {
            status: '进行中'
        }
    });
    const activeCompetitionIds = activeCompetitions.map((comp)=>comp.id);
    if (activeCompetitionIds.length === 0) return [];
    const activeWorksFromDb = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.findMany({
        where: {
            competitionId: {
                in: activeCompetitionIds
            },
            status: '有效'
        },
        orderBy: {
            votes: 'desc'
        }
    });
    let userVotesForBuildings = [];
    if (currentUser) {
        const votes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userVote.findMany({
            where: {
                userId: currentUser.socialUid,
                buildingId: {
                    in: activeWorksFromDb.map((b)=>b.id)
                }
            },
            select: {
                buildingId: true
            }
        });
        userVotesForBuildings = votes.map((v)=>v.buildingId);
    }
    const works = activeWorksFromDb.map((b)=>({
            ...b,
            submissionDate: b.submissionDate?.toISOString(),
            lastReportDate: b.lastReportDate?.toISOString(),
            createdAt: b.createdAt.toISOString(),
            updatedAt: b.updatedAt.toISOString(),
            currentUserHasVoted: currentUser ? userVotesForBuildings.includes(b.id) : false
        }));
    return serializeDates(works);
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getHistoricalCompetitions() {
    const competitionsFromDb = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].competition.findMany({
        where: {
            NOT: {
                status: '进行中'
            }
        },
        orderBy: [
            {
                year: 'desc'
            },
            {
                startDate: 'desc'
            },
            {
                name: 'asc'
            }
        ]
    });
    return serializeDates(competitionsFromDb);
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getCompetitionById(competitionId) {
    const competition = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].competition.findUnique({
        where: {
            id: competitionId
        }
    });
    return competition ? serializeDates(competition) : undefined;
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getCompetitionWithWorks(competitionId, currentUserParam) {
    let currentUser = currentUserParam;
    if (currentUser === undefined) {
        currentUser = await getUserSession();
    }
    const competition = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].competition.findUnique({
        where: {
            id: competitionId
        }
    });
    if (!competition) {
        return undefined;
    }
    const worksForCompetitionFromDb = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.findMany({
        where: {
            competitionId: competitionId
        },
        orderBy: {
            votes: 'desc'
        }
    });
    let userVotesForBuildings = [];
    if (currentUser) {
        const votes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userVote.findMany({
            where: {
                userId: currentUser.socialUid,
                buildingId: {
                    in: worksForCompetitionFromDb.map((b)=>b.id)
                }
            },
            select: {
                buildingId: true
            }
        });
        userVotesForBuildings = votes.map((v)=>v.buildingId);
    }
    const works = worksForCompetitionFromDb.map((b)=>({
            ...b,
            submissionDate: b.submissionDate?.toISOString(),
            lastReportDate: b.lastReportDate?.toISOString(),
            createdAt: b.createdAt.toISOString(),
            updatedAt: b.updatedAt.toISOString(),
            currentUserHasVoted: currentUser ? userVotesForBuildings.includes(b.id) : false
        }));
    return serializeDates({
        ...competition,
        works
    });
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateBuildingStatus(buildingId, newStatus) {
    const building = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.findUnique({
        where: {
            id: buildingId
        }
    });
    if (!building) {
        return {
            success: false,
            message: '建筑不存在！'
        };
    }
    const updateData = {
        status: newStatus
    };
    if (newStatus !== '审查中-被举报') {
        updateData.reportReason = undefined;
        updateData.lastReportedBy = undefined;
        updateData.lastReportDate = undefined;
    }
    const updatedBuilding = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.update({
        where: {
            id: buildingId
        },
        data: updateData
    });
    RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/building/${buildingId}`);
    if (building.competitionId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/history/competition/${building.competitionId}`);
    }
    return {
        success: true,
        message: `作品 "${updatedBuilding.name}" 状态已更新为 "${newStatus}"。`
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
    const building = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.findUnique({
        where: {
            id: buildingId
        }
    });
    if (!building) {
        return {
            success: false,
            message: '要删除的作品不存在。'
        };
    }
    // Prisma schema should handle cascading delete for UserVote via `onDelete: Cascade`
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.delete({
        where: {
            id: buildingId
        }
    });
    RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
    if (building.competitionId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/history/competition/${building.competitionId}`);
    }
    return {
        success: true,
        message: `作品 "${building.name}" 已成功删除。`
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getCompetitions() {
    const competitionsFromDb = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].competition.findMany({
        orderBy: [
            {
                year: 'desc'
            },
            {
                startDate: 'desc'
            }
        ]
    });
    return serializeDates(competitionsFromDb);
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSubmittableCompetitions() {
    const submittable = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].competition.findMany({
        where: {
            OR: [
                {
                    status: '进行中'
                },
                {
                    status: '策划中'
                }
            ]
        },
        orderBy: [
            {
                year: 'desc'
            },
            {
                startDate: 'desc'
            }
        ]
    });
    return serializeDates(submittable);
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
    try {
        const newCompetition = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].competition.create({
            data: {
                name: competitionData.name,
                year: competitionData.year,
                status: competitionData.status,
                startDate: new Date(competitionData.startDate),
                endDate: new Date(competitionData.endDate),
                description: competitionData.description,
                territoryPrefix: competitionData.territoryPrefix
            }
        });
        RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
        return {
            success: true,
            message: '比赛创建成功！',
            competition: serializeDates(newCompetition)
        };
    } catch (error) {
        console.error("Error creating competition:", error);
        return {
            success: false,
            message: '比赛创建失败，请检查数据或联系管理员。'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateCompetition(competitionId, competitionData) {
    const existingCompetition = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].competition.findUnique({
        where: {
            id: competitionId
        }
    });
    if (!existingCompetition) {
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
    const dataToUpdate = {
        ...competitionData
    };
    if (competitionData.startDate) dataToUpdate.startDate = new Date(competitionData.startDate);
    if (competitionData.endDate) dataToUpdate.endDate = new Date(competitionData.endDate);
    try {
        const updatedCompetition = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].competition.update({
            where: {
                id: competitionId
            },
            data: dataToUpdate
        });
        RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/history/competition/${competitionId}`);
        return {
            success: true,
            message: '比赛更新成功！',
            competition: serializeDates(updatedCompetition)
        };
    } catch (error) {
        console.error("Error updating competition:", error);
        return {
            success: false,
            message: '比赛更新失败。'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteCompetition(competitionId) {
    const currentUser = await getUserSession();
    if (!currentUser || currentUser.type !== 'staff') {
        return {
            success: false,
            message: '只有管理员才能删除比赛。'
        };
    }
    try {
        // Prisma schema onDelete: Cascade should handle deleting related buildings and their votes
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].competition.delete({
            where: {
                id: competitionId
            }
        });
        RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/history/competition/${competitionId}`);
        return {
            success: true,
            message: '比赛删除成功，其关联的作品也已一并删除。'
        };
    } catch (error) {
        console.error("Error deleting competition:", error);
        return {
            success: false,
            message: '比赛不存在或删除失败！'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ submitNewBuilding(formData) {
    const currentUser = await getUserSession();
    if (!currentUser) {
        return {
            success: false,
            message: '请先登录才能提交作品。'
        };
    }
    const competition = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].competition.findUnique({
        where: {
            id: formData.competitionId
        }
    });
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
    try {
        const newBuilding = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.create({
            data: {
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
                coordinateX: formData.coordinateX,
                coordinateY: formData.coordinateY,
                coordinateZ: formData.coordinateZ,
                eventEdition: competition.year,
                eventYear: competition.year,
                status: '等待审核',
                competitionId: formData.competitionId,
                submissionDate: new Date()
            }
        });
        RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/history/competition/${formData.competitionId}`);
        return {
            success: true,
            message: '作品提交成功，状态为等待审核。',
            buildingId: newBuilding.id
        };
    } catch (error) {
        console.error("Error submitting new building:", error);
        return {
            success: false,
            message: '作品提交失败，请稍后再试。'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getUserSubmittedWorks(currentUserParam) {
    let userToCheck = currentUserParam;
    if (currentUserParam === undefined) {
        userToCheck = await getUserSession();
    }
    if (!userToCheck) {
        return [];
    }
    const userWorksFromDb = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.findMany({
        where: {
            authorSocialUid: userToCheck.socialUid
        },
        orderBy: {
            submissionDate: 'desc'
        }
    });
    const userVotesForBuildings = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userVote.findMany({
        where: {
            userId: userToCheck.socialUid,
            buildingId: {
                in: userWorksFromDb.map((b)=>b.id)
            }
        },
        select: {
            buildingId: true
        }
    });
    const userVotedBuildingIds = userVotesForBuildings.map((v)=>v.buildingId);
    const works = userWorksFromDb.map((b)=>({
            ...b,
            submissionDate: b.submissionDate?.toISOString(),
            lastReportDate: b.lastReportDate?.toISOString(),
            createdAt: b.createdAt.toISOString(),
            updatedAt: b.updatedAt.toISOString(),
            currentUserHasVoted: userVotedBuildingIds.includes(b.id)
        }));
    return serializeDates(works);
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getBuildingsByCompetitionId(competitionId, currentUserParam) {
    let currentUser = currentUserParam;
    if (currentUser === undefined) {
        currentUser = await getUserSession();
    }
    const buildingsFromDb = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.findMany({
        where: {
            competitionId: competitionId
        },
        orderBy: {
            votes: 'desc'
        }
    });
    let userVotesForBuildings = [];
    if (currentUser) {
        const votes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userVote.findMany({
            where: {
                userId: currentUser.socialUid,
                buildingId: {
                    in: buildingsFromDb.map((b)=>b.id)
                }
            },
            select: {
                buildingId: true
            }
        });
        userVotesForBuildings = votes.map((v)=>v.buildingId);
    }
    const works = buildingsFromDb.map((b)=>({
            ...b,
            submissionDate: b.submissionDate?.toISOString(),
            lastReportDate: b.lastReportDate?.toISOString(),
            createdAt: b.createdAt.toISOString(),
            updatedAt: b.updatedAt.toISOString(),
            currentUserHasVoted: currentUser ? userVotesForBuildings.includes(b.id) : false
        }));
    return serializeDates(works);
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
    const building = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.findUnique({
        where: {
            id: buildingId
        }
    });
    if (!building) {
        return {
            success: false,
            message: '要举报的作品不存在。'
        };
    }
    if ([
        '审查中-被举报',
        '违规',
        '作弊',
        '无效'
    ].includes(building.status)) {
        return {
            success: false,
            message: `作品 "${building.name}" 当前状态 (${building.status}) 无法重复举报或已处理。`
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.update({
            where: {
                id: buildingId
            },
            data: {
                status: '审查中-被举报',
                reportReason: reason,
                lastReportedBy: currentUser.socialUid,
                lastReportDate: new Date()
            }
        });
        console.log(`[DB_REPORT] 作品 "${building.name}" (ID: ${building.id}) 已被用户 ${currentUser.nickname} (ID: ${currentUser.socialUid}) 举报。原状态: ${building.status}, 作者: ${building.author} (ID: ${building.authorSocialUid})。原因: ${reason}`);
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
    } catch (error) {
        console.error("Error reporting building:", error);
        return {
            success: false,
            message: '举报失败，请稍后再试。'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ dismissReportAction(buildingId) {
    const currentUser = await getUserSession();
    if (!currentUser || currentUser.type !== 'staff') {
        return {
            success: false,
            message: '只有管理员才能执行此操作。'
        };
    }
    const building = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.findUnique({
        where: {
            id: buildingId
        }
    });
    if (!building) {
        return {
            success: false,
            message: '作品不存在。'
        };
    }
    if (building.status !== '审查中-被举报') {
        return {
            success: false,
            message: `作品 "${building.name}" 当前不处于“审查中-被举报”状态。`
        };
    }
    try {
        const updatedBuilding = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].building.update({
            where: {
                id: buildingId
            },
            data: {
                status: '有效',
                reportReason: null,
                lastReportedBy: null,
                lastReportDate: null
            }
        });
        RELEVANT_BUILDING_PATHS.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
        if (updatedBuilding.competitionId) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/history/competition/${updatedBuilding.competitionId}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/building/${updatedBuilding.id}`);
        return {
            success: true,
            message: `作品 "${updatedBuilding.name}" 的举报已被撤销，状态已恢复为“有效”。`
        };
    } catch (error) {
        console.error("Error dismissing report:", error);
        return {
            success: false,
            message: '撤销举报失败。'
        };
    }
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
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "000f9c3d737d6b103cc8eb48b63b334a5c578367c2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["000f9c3d737d6b103cc8eb48b63b334a5c578367c2"]),
    "004874233f0821a8a963583307ba771b5b0f697bc7": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["004874233f0821a8a963583307ba771b5b0f697bc7"]),
    "006769990f4d29db3d9642a057b6c38a9af6f7f32c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["006769990f4d29db3d9642a057b6c38a9af6f7f32c"]),
    "0071299063e7df5bc8205002c8d01f32d097bf28eb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0071299063e7df5bc8205002c8d01f32d097bf28eb"]),
    "00924a3e4b3549f137af9ec57358120be960cd01d8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00924a3e4b3549f137af9ec57358120be960cd01d8"]),
    "00b53290c574162d521b2261cba165a710273a3676": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00b53290c574162d521b2261cba165a710273a3676"]),
    "4006d538def970e4cd9a3c4d27015b01e42ca4a958": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["4006d538def970e4cd9a3c4d27015b01e42ca4a958"]),
    "4017a5edd4ad103bdcfc14fce39434d645da119f55": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["4017a5edd4ad103bdcfc14fce39434d645da119f55"]),
    "403eadd05e4274e25f43462da6774833b55e6f2f87": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["403eadd05e4274e25f43462da6774833b55e6f2f87"]),
    "40444a9b508884d641eff34582900ccddb872a70cb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40444a9b508884d641eff34582900ccddb872a70cb"]),
    "407758c31142994f61ad4a8f497bcd12b3f60f5b0b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["407758c31142994f61ad4a8f497bcd12b3f60f5b0b"]),
    "407f93716e27995cc8830e1f1d5ff2e0c2a84dc3e8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["407f93716e27995cc8830e1f1d5ff2e0c2a84dc3e8"]),
    "40879a9ed5d6d88b171cdf9253f357fb32f3c77043": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40879a9ed5d6d88b171cdf9253f357fb32f3c77043"]),
    "40aa70e21df6d39915afc256fe458eddce4d328fea": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40aa70e21df6d39915afc256fe458eddce4d328fea"]),
    "40bd91dfe39c11ef19064625013e11e94fb027dc2a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40bd91dfe39c11ef19064625013e11e94fb027dc2a"]),
    "40ce9bdb447cffe92dcd2aee716fbfa0e477608bc5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40ce9bdb447cffe92dcd2aee716fbfa0e477608bc5"]),
    "40ffef2c295b771509830a5d640f1c6fc4cc1782ef": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40ffef2c295b771509830a5d640f1c6fc4cc1782ef"]),
    "6021c49044ee325d074326b779c603c0a1070e03ba": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["6021c49044ee325d074326b779c603c0a1070e03ba"]),
    "604dfa2b493bc34c6cf943fe7c0f0210f2a9d90a0e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["604dfa2b493bc34c6cf943fe7c0f0210f2a9d90a0e"]),
    "60513ea9dda8cd1745a1150d9bcbeec7155772ee8e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60513ea9dda8cd1745a1150d9bcbeec7155772ee8e"]),
    "605a63f90a27ea54c55f6e4c5f8f4f011e1b337bee": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["605a63f90a27ea54c55f6e4c5f8f4f011e1b337bee"]),
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
"[project]/src/app/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/page.tsx", "default");
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__e7e8f970._.js.map