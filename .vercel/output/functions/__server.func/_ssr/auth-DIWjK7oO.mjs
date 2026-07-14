//#region node_modules/.nitro/vite/services/ssr/assets/auth-DIWjK7oO.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var auth_exports = /* @__PURE__ */ __exportAll({
	changePasswordApi: () => changePasswordApi,
	clearAuthData: () => clearAuthData,
	createUserApi: () => createUserApi,
	getToken: () => getToken,
	getUser: () => getUser,
	loginApi: () => loginApi,
	logout: () => logout,
	setAuthData: () => setAuthData
});
var USER_KEY = "packwise_user";
var TOKEN_KEY = "packwise_token";
var API_BASE = "http://localhost:8000";
function getToken() {
	if (typeof window === "undefined") return null;
	return localStorage.getItem(TOKEN_KEY);
}
function setAuthData(token, user) {
	if (typeof window !== "undefined") {
		localStorage.setItem(TOKEN_KEY, token);
		localStorage.setItem(USER_KEY, JSON.stringify(user));
	}
}
function clearAuthData() {
	if (typeof window !== "undefined") {
		localStorage.removeItem(TOKEN_KEY);
		localStorage.removeItem(USER_KEY);
	}
}
function getUser() {
	if (typeof window === "undefined") return null;
	const raw = localStorage.getItem(USER_KEY);
	if (!raw) return null;
	try {
		const u = JSON.parse(raw);
		if (u && u.role) {
			const r = u.role.toLowerCase();
			if (r.includes("engineer")) u.role = "engineer";
			else if (r.includes("manager")) u.role = "manager";
			else if (r.includes("admin")) u.role = "admin";
		}
		return u;
	} catch {
		return null;
	}
}
async function loginApi(email, password) {
	const res = await fetch(`${API_BASE}/auth/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email,
			password
		})
	});
	if (!res.ok) {
		const error = await res.json().catch(() => ({ detail: "Login failed" }));
		throw new Error(error.detail || "Login failed");
	}
	const token = (await res.json()).access_token;
	const meRes = await fetch(`${API_BASE}/auth/me`, { headers: { "Authorization": `Bearer ${token}` } });
	if (!meRes.ok) throw new Error("Failed to fetch user profile");
	const profile = await meRes.json();
	if (profile && profile.role) {
		const r = profile.role.toLowerCase();
		if (r.includes("engineer")) profile.role = "engineer";
		else if (r.includes("manager")) profile.role = "manager";
		else if (r.includes("admin")) profile.role = "admin";
	}
	setAuthData(token, profile);
	return profile;
}
function logout() {
	clearAuthData();
}
async function changePasswordApi(new_password) {
	const token = getToken();
	if (!token) throw new Error("Not authenticated");
	const res = await fetch(`${API_BASE}/auth/change-password`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		},
		body: JSON.stringify({ new_password })
	});
	if (!res.ok) {
		const error = await res.json().catch(() => ({ detail: "Failed to change password" }));
		throw new Error(error.detail || "Failed to change password");
	}
	const user = getUser();
	if (user) {
		user.must_change_password = false;
		localStorage.setItem(USER_KEY, JSON.stringify(user));
	}
}
async function createUserApi(email, name, role) {
	const token = getToken();
	if (!token) throw new Error("Not authenticated");
	const res = await fetch(`${API_BASE}/auth/create-user`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		},
		body: JSON.stringify({
			email,
			name,
			role
		})
	});
	if (!res.ok) {
		const error = await res.json().catch(() => ({ detail: "Failed to create user" }));
		throw new Error(error.detail || "Failed to create user");
	}
	return await res.json();
}
//#endregion
export { getUser as a, getToken as i, changePasswordApi as n, loginApi as o, createUserApi as r, logout as s, auth_exports as t };
