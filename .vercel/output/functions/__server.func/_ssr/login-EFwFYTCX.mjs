import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as getUser, o as loginApi } from "./auth-DIWjK7oO.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Brand } from "./brand-BHMQv63X.mjs";
import { K as Eye, M as LoaderCircle, q as EyeOff } from "../_libs/lucide-react.mjs";
import { n as CardContent, t as Card } from "./card-CtX3ithx.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { t as Checkbox } from "./checkbox-kt6FvQcE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-EFwFYTCX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [show, setShow] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const u = getUser();
		if (u) if (u.must_change_password) navigate({ to: "/change-password" });
		else navigate({ to: "/app/dashboard" });
	}, [navigate]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const user = await loginApi(email, password);
			if (user.must_change_password) {
				toast.info("Password change required", { description: "Please set a new password." });
				navigate({ to: "/change-password" });
				return;
			}
			toast.success(`Welcome back, ${user.name.split(" ")[0]}`);
			navigate({ to: "/app/dashboard" });
		} catch (err) {
			toast.error(err.message || "Account not found", { description: "Please check your email and password." });
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-screen lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col px-6 py-10 sm:px-12 lg:px-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-1 items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-semibold tracking-tight",
							children: "Sign in to your workspace"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Welcome back. Enter your credentials to continue optimizing your packaging."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "mt-8 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "email",
										children: "Work email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										type: "email",
										placeholder: "you@company.com",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										required: true,
										autoComplete: "email"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "password",
											children: "Password"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => toast.info("Please contact the Administrator at admin@packwise.ai to reset your password or request a password change."),
											className: "text-xs font-medium text-primary hover:underline",
											children: "Forgot password?"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "password",
											type: show ? "text" : "password",
											placeholder: "••••••••",
											value: password,
											onChange: (e) => setPassword(e.target.value),
											required: true,
											autoComplete: "current-password"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShow((s) => !s),
											className: "absolute inset-y-0 right-2 flex items-center text-muted-foreground hover:text-foreground",
											"aria-label": "Toggle password visibility",
											children: show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										id: "remember",
										defaultChecked: true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "remember",
										className: "text-sm font-normal text-muted-foreground",
										children: "Remember me for 30 days"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "submit",
									className: "w-full",
									disabled: loading,
									children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Sign in"]
								})
							]
						})
					]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hidden flex-col justify-between bg-[color:var(--primary-soft)] p-12 lg:flex",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border/70 bg-card px-4 py-3 text-left shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-foreground",
							children: "Forgot your password?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: [
								"For security reasons, users cannot reset their own passwords. Please contact your Administrator at ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "admin@packwise.ai" }),
								" to request a temporary password."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border/70 bg-card px-4 py-3 text-left shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-foreground",
							children: "First time login?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Use the temporary password provided by your Administrator. You will be prompted to set your own secure password immediately after signing in."
						})]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "border-border/70 shadow-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-muted-foreground",
							children: "In production"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm font-medium text-foreground",
							children: "“PackWise AI cut our prototype iteration time by 40% and helped us hit our 2026 sustainability targets a full year early.”"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted-foreground",
							children: "— Director of Packaging, global toy manufacturer"
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { LoginPage as component };
