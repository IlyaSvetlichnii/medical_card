/*! cornerstone-wado-image-loader - 2.2.2 - 2018-12-05 | (c) 2016 Chris Hafey | https://github.com/cornerstonejs/cornerstoneWADOImageLoader */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("cornerstoneWADOImageLoader", [], factory);
	else if(typeof exports === 'object')
		exports["cornerstoneWADOImageLoader"] = factory();
	else
		root["cornerstoneWADOImageLoader"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdate_name_"];
/******/ 	this["webpackHotUpdate_name_"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "8ffa164be7f9a32e3dae";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "cornerstoneWADOImageLoader";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./imageLoader/index.js")(__webpack_require__.s = "./imageLoader/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./externalModules.js":
/*!****************************!*\
  !*** ./externalModules.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imageLoader_registerLoaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageLoader/registerLoaders.js */ "./imageLoader/registerLoaders.js");
/* eslint import/extensions:0 */

var cornerstone;
var dicomParser;
var external = {
  set cornerstone(cs) {
    cornerstone = cs;
    Object(_imageLoader_registerLoaders_js__WEBPACK_IMPORTED_MODULE_0__["default"])(cornerstone);
  },

  get cornerstone() {
    if (!cornerstone) {
      if (window && window.cornerstone) {
        cornerstone = window.cornerstone;
        Object(_imageLoader_registerLoaders_js__WEBPACK_IMPORTED_MODULE_0__["default"])(cornerstone);
      } else {
        throw new Error('cornerstoneWADOImageLoader requires a copy of Cornerstone to work properly. Please add cornerstoneWADOImageLoader.external.cornerstone = cornerstone; to your application.');
      }
    }

    return cornerstone;
  },

  set dicomParser(dp) {
    dicomParser = dp;
  },

  get dicomParser() {
    if (!dicomParser) {
      if (window && window.dicomParser) {
        dicomParser = window.dicomParser;
      } else {
        throw new Error('cornerstoneWADOImageLoader requires a copy of dicomParser to work properly. Please add cornerstoneWADOImageLoader.external.dicomParser = dicomParser; to your application.');
      }
    }

    return dicomParser;
  }

};
/* harmony default export */ __webpack_exports__["default"] = (external);

/***/ }),

/***/ "./imageLoader/colorSpaceConverters/convertPALETTECOLOR.js":
/*!*****************************************************************!*\
  !*** ./imageLoader/colorSpaceConverters/convertPALETTECOLOR.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint no-bitwise: 0 */
function convertLUTto8Bit(lut, shift) {
  var numEntries = lut.length;
  var cleanedLUT = new Uint8ClampedArray(numEntries);

  for (var i = 0; i < numEntries; ++i) {
    cleanedLUT[i] = lut[i] >> shift;
  }

  return cleanedLUT;
}
/**
 * Convert pixel data with PALETTE COLOR Photometric Interpretation to RGBA
 *
 * @param {ImageFrame} imageFrame
 * @param {Uint8ClampedArray} rgbaBuffer
 * @returns {void}
 */


/* harmony default export */ __webpack_exports__["default"] = (function (imageFrame, rgbaBuffer) {
  var numPixels = imageFrame.columns * imageFrame.rows;
  var pixelData = imageFrame.pixelData;
  var rData = imageFrame.redPaletteColorLookupTableData;
  var gData = imageFrame.greenPaletteColorLookupTableData;
  var bData = imageFrame.bluePaletteColorLookupTableData;
  var len = imageFrame.redPaletteColorLookupTableData.length;
  var palIndex = 0;
  var rgbaIndex = 0;
  var start = imageFrame.redPaletteColorLookupTableDescriptor[1];
  var shift = imageFrame.redPaletteColorLookupTableDescriptor[2] === 8 ? 0 : 8;
  var rDataCleaned = convertLUTto8Bit(rData, shift);
  var gDataCleaned = convertLUTto8Bit(gData, shift);
  var bDataCleaned = convertLUTto8Bit(bData, shift);

  for (var i = 0; i < numPixels; ++i) {
    var value = pixelData[palIndex++];

    if (value < start) {
      value = 0;
    } else if (value > start + len - 1) {
      value = len - 1;
    } else {
      value -= start;
    }

    rgbaBuffer[rgbaIndex++] = rDataCleaned[value];
    rgbaBuffer[rgbaIndex++] = gDataCleaned[value];
    rgbaBuffer[rgbaIndex++] = bDataCleaned[value];
    rgbaBuffer[rgbaIndex++] = 255;
  }
});

/***/ }),

/***/ "./imageLoader/colorSpaceConverters/convertRGBColorByPixel.js":
/*!********************************************************************!*\
  !*** ./imageLoader/colorSpaceConverters/convertRGBColorByPixel.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (imageFrame, rgbaBuffer) {
  if (imageFrame === undefined) {
    throw new Error('decodeRGB: rgbBuffer must not be undefined');
  }

  if (imageFrame.length % 3 !== 0) {
    throw new Error('decodeRGB: rgbBuffer length must be divisible by 3');
  }

  var numPixels = imageFrame.length / 3;
  var rgbIndex = 0;
  var rgbaIndex = 0;

  for (var i = 0; i < numPixels; i++) {
    rgbaBuffer[rgbaIndex++] = imageFrame[rgbIndex++]; // red

    rgbaBuffer[rgbaIndex++] = imageFrame[rgbIndex++]; // green

    rgbaBuffer[rgbaIndex++] = imageFrame[rgbIndex++]; // blue

    rgbaBuffer[rgbaIndex++] = 255; // alpha
  }
});

/***/ }),

/***/ "./imageLoader/colorSpaceConverters/convertRGBColorByPlane.js":
/*!********************************************************************!*\
  !*** ./imageLoader/colorSpaceConverters/convertRGBColorByPlane.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (imageFrame, rgbaBuffer) {
  if (imageFrame === undefined) {
    throw new Error('decodeRGB: rgbBuffer must not be undefined');
  }

  if (imageFrame.length % 3 !== 0) {
    throw new Error('decodeRGB: rgbBuffer length must be divisible by 3');
  }

  var numPixels = imageFrame.length / 3;
  var rgbaIndex = 0;
  var rIndex = 0;
  var gIndex = numPixels;
  var bIndex = numPixels * 2;

  for (var i = 0; i < numPixels; i++) {
    rgbaBuffer[rgbaIndex++] = imageFrame[rIndex++]; // red

    rgbaBuffer[rgbaIndex++] = imageFrame[gIndex++]; // green

    rgbaBuffer[rgbaIndex++] = imageFrame[bIndex++]; // blue

    rgbaBuffer[rgbaIndex++] = 255; // alpha
  }
});

/***/ }),

/***/ "./imageLoader/colorSpaceConverters/convertYBRFullByPixel.js":
/*!*******************************************************************!*\
  !*** ./imageLoader/colorSpaceConverters/convertYBRFullByPixel.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (imageFrame, rgbaBuffer) {
  if (imageFrame === undefined) {
    throw new Error('decodeRGB: ybrBuffer must not be undefined');
  }

  if (imageFrame.length % 3 !== 0) {
    throw new Error('decodeRGB: ybrBuffer length must be divisble by 3');
  }

  var numPixels = imageFrame.length / 3;
  var ybrIndex = 0;
  var rgbaIndex = 0;

  for (var i = 0; i < numPixels; i++) {
    var y = imageFrame[ybrIndex++];
    var cb = imageFrame[ybrIndex++];
    var cr = imageFrame[ybrIndex++];
    rgbaBuffer[rgbaIndex++] = y + 1.40200 * (cr - 128); // red

    rgbaBuffer[rgbaIndex++] = y - 0.34414 * (cb - 128) - 0.71414 * (cr - 128); // green

    rgbaBuffer[rgbaIndex++] = y + 1.77200 * (cb - 128); // blue

    rgbaBuffer[rgbaIndex++] = 255; // alpha
  }
});

/***/ }),

/***/ "./imageLoader/colorSpaceConverters/convertYBRFullByPlane.js":
/*!*******************************************************************!*\
  !*** ./imageLoader/colorSpaceConverters/convertYBRFullByPlane.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (imageFrame, rgbaBuffer) {
  if (imageFrame === undefined) {
    throw new Error('decodeRGB: ybrBuffer must not be undefined');
  }

  if (imageFrame.length % 3 !== 0) {
    throw new Error('decodeRGB: ybrBuffer length must be divisble by 3');
  }

  var numPixels = imageFrame.length / 3;
  var rgbaIndex = 0;
  var yIndex = 0;
  var cbIndex = numPixels;
  var crIndex = numPixels * 2;

  for (var i = 0; i < numPixels; i++) {
    var y = imageFrame[yIndex++];
    var cb = imageFrame[cbIndex++];
    var cr = imageFrame[crIndex++];
    rgbaBuffer[rgbaIndex++] = y + 1.40200 * (cr - 128); // red

    rgbaBuffer[rgbaIndex++] = y - 0.34414 * (cb - 128) - 0.71414 * (cr - 128); // green

    rgbaBuffer[rgbaIndex++] = y + 1.77200 * (cb - 128); // blue

    rgbaBuffer[rgbaIndex++] = 255; // alpha
  }
});

/***/ }),

/***/ "./imageLoader/colorSpaceConverters/index.js":
/*!***************************************************!*\
  !*** ./imageLoader/colorSpaceConverters/index.js ***!
  \***************************************************/
/*! exports provided: convertRGBColorByPixel, convertRGBColorByPlane, convertYBRFullByPixel, convertYBRFullByPlane, convertPALETTECOLOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _convertRGBColorByPixel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertRGBColorByPixel.js */ "./imageLoader/colorSpaceConverters/convertRGBColorByPixel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertRGBColorByPixel", function() { return _convertRGBColorByPixel_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _convertRGBColorByPlane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convertRGBColorByPlane.js */ "./imageLoader/colorSpaceConverters/convertRGBColorByPlane.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertRGBColorByPlane", function() { return _convertRGBColorByPlane_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _convertYBRFullByPixel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./convertYBRFullByPixel.js */ "./imageLoader/colorSpaceConverters/convertYBRFullByPixel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertYBRFullByPixel", function() { return _convertYBRFullByPixel_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _convertYBRFullByPlane_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./convertYBRFullByPlane.js */ "./imageLoader/colorSpaceConverters/convertYBRFullByPlane.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertYBRFullByPlane", function() { return _convertYBRFullByPlane_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _convertPALETTECOLOR_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./convertPALETTECOLOR.js */ "./imageLoader/colorSpaceConverters/convertPALETTECOLOR.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertPALETTECOLOR", function() { return _convertPALETTECOLOR_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./imageLoader/configure.js":
/*!**********************************!*\
  !*** ./imageLoader/configure.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/index.js */ "./imageLoader/internal/index.js");


function configure(options) {
  Object(_internal_index_js__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(options);
}

/* harmony default export */ __webpack_exports__["default"] = (configure);

/***/ }),

/***/ "./imageLoader/convertColorSpace.js":
/*!******************************************!*\
  !*** ./imageLoader/convertColorSpace.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return convertColorSpace; });
/* harmony import */ var _colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorSpaceConverters/index.js */ "./imageLoader/colorSpaceConverters/index.js");


function convertRGB(imageFrame, rgbaBuffer) {
  if (imageFrame.planarConfiguration === 0) {
    Object(_colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__["convertRGBColorByPixel"])(imageFrame.pixelData, rgbaBuffer);
  } else {
    Object(_colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__["convertRGBColorByPlane"])(imageFrame.pixelData, rgbaBuffer);
  }
}

function convertYBRFull(imageFrame, rgbaBuffer) {
  if (imageFrame.planarConfiguration === 0) {
    Object(_colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__["convertYBRFullByPixel"])(imageFrame.pixelData, rgbaBuffer);
  } else {
    Object(_colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__["convertYBRFullByPlane"])(imageFrame.pixelData, rgbaBuffer);
  }
}

function convertColorSpace(imageFrame, imageData) {
  var rgbaBuffer = imageData.data; // convert based on the photometric interpretation

  if (imageFrame.photometricInterpretation === 'RGB') {
    convertRGB(imageFrame, rgbaBuffer);
  } else if (imageFrame.photometricInterpretation === 'YBR_RCT') {
    convertRGB(imageFrame, rgbaBuffer);
  } else if (imageFrame.photometricInterpretation === 'YBR_ICT') {
    convertRGB(imageFrame, rgbaBuffer);
  } else if (imageFrame.photometricInterpretation === 'PALETTE COLOR') {
    Object(_colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__["convertPALETTECOLOR"])(imageFrame, rgbaBuffer);
  } else if (imageFrame.photometricInterpretation === 'YBR_FULL_422') {
    convertRGB(imageFrame, rgbaBuffer);
  } else if (imageFrame.photometricInterpretation === 'YBR_FULL') {
    convertYBRFull(imageFrame, rgbaBuffer);
  } else {
    throw new Error("No color space conversion for photometric interpretation ".concat(imageFrame.photometricInterpretation));
  }
}

/***/ }),

/***/ "./imageLoader/createImage.js":
/*!************************************!*\
  !*** ./imageLoader/createImage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _externalModules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");
/* harmony import */ var _getImageFrame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getImageFrame.js */ "./imageLoader/getImageFrame.js");
/* harmony import */ var _decodeImageFrame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decodeImageFrame.js */ "./imageLoader/decodeImageFrame.js");
/* harmony import */ var _isColorImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isColorImage.js */ "./imageLoader/isColorImage.js");
/* harmony import */ var _convertColorSpace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./convertColorSpace.js */ "./imageLoader/convertColorSpace.js");
/* harmony import */ var _shared_getMinMax_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/getMinMax.js */ "./shared/getMinMax.js");
/* harmony import */ var _isJPEGBaseline8BitColor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isJPEGBaseline8BitColor.js */ "./imageLoader/isJPEGBaseline8BitColor.js");







var lastImageIdDrawn = '';

function isModalityLUTForDisplay(sopClassUid) {
  // special case for XA and XRF
  // https://groups.google.com/forum/#!searchin/comp.protocols.dicom/Modality$20LUT$20XA/comp.protocols.dicom/UBxhOZ2anJ0/D0R_QP8V2wIJ
  return sopClassUid !== '1.2.840.10008.5.1.4.1.1.12.1' && // XA
  sopClassUid !== '1.2.840.10008.5.1.4.1.1.12.2.1'; // XRF
}

function convertToIntPixelData(floatPixelData) {
  var floatMinMax = Object(_shared_getMinMax_js__WEBPACK_IMPORTED_MODULE_5__["default"])(floatPixelData);
  var floatRange = Math.abs(floatMinMax.max - floatMinMax.min);
  var intRange = 65535;
  var slope = floatRange / intRange;
  var intercept = floatMinMax.min;
  var numPixels = floatPixelData.length;
  var intPixelData = new Uint16Array(numPixels);
  var min = 65535;
  var max = 0;

  for (var i = 0; i < numPixels; i++) {
    var rescaledPixel = Math.floor((floatPixelData[i] - intercept) / slope);
    intPixelData[i] = rescaledPixel;
    min = Math.min(min, rescaledPixel);
    max = Math.max(max, rescaledPixel);
  }

  return {
    min: min,
    max: max,
    intPixelData: intPixelData,
    slope: slope,
    intercept: intercept
  };
}
/**
 * Helper function to set pixel data to the right typed array.  This is needed because web workers
 * can transfer array buffers but not typed arrays
 * @param imageFrame
 */


function setPixelDataType(imageFrame) {
  if (imageFrame.bitsAllocated === 32) {
    imageFrame.pixelData = new Float32Array(imageFrame.pixelData);
  } else if (imageFrame.bitsAllocated === 16) {
    if (imageFrame.pixelRepresentation === 0) {
      imageFrame.pixelData = new Uint16Array(imageFrame.pixelData);
    } else {
      imageFrame.pixelData = new Int16Array(imageFrame.pixelData);
    }
  } else {
    imageFrame.pixelData = new Uint8Array(imageFrame.pixelData);
  }
}

function createImage(imageId, pixelData, transferSyntax, options) {
  if (!pixelData || !pixelData.length) {
    return Promise.reject(new Error('The file does not contain image data.'));
  }

  var cornerstone = _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstone;
  var canvas = document.createElement('canvas');
  var imageFrame = Object(_getImageFrame_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imageId);
  var decodePromise = Object(_decodeImageFrame_js__WEBPACK_IMPORTED_MODULE_2__["default"])(imageFrame, transferSyntax, pixelData, canvas, options);
  return new Promise(function (resolve, reject) {
    decodePromise.then(function (imageFrame) {
      var imagePlaneModule = cornerstone.metaData.get('imagePlaneModule', imageId) || {};
      var voiLutModule = cornerstone.metaData.get('voiLutModule', imageId) || {};
      var modalityLutModule = cornerstone.metaData.get('modalityLutModule', imageId) || {};
      var sopCommonModule = cornerstone.metaData.get('sopCommonModule', imageId) || {};
      var isColorImage = Object(_isColorImage_js__WEBPACK_IMPORTED_MODULE_3__["default"])(imageFrame.photometricInterpretation); // JPEGBaseline (8 bits) is already returning the pixel data in the right format (rgba)
      // because it's using a canvas to load and decode images.

      if (!Object(_isJPEGBaseline8BitColor_js__WEBPACK_IMPORTED_MODULE_6__["default"])(imageFrame, transferSyntax)) {
        setPixelDataType(imageFrame); // convert color space

        if (isColorImage) {
          // setup the canvas context
          canvas.height = imageFrame.rows;
          canvas.width = imageFrame.columns;
          var context = canvas.getContext('2d');
          var imageData = context.createImageData(imageFrame.columns, imageFrame.rows);
          Object(_convertColorSpace_js__WEBPACK_IMPORTED_MODULE_4__["default"])(imageFrame, imageData);
          imageFrame.imageData = imageData;
          imageFrame.pixelData = imageData.data; // calculate smallest and largest PixelValue of the converted pixelData

          var minMax = Object(_shared_getMinMax_js__WEBPACK_IMPORTED_MODULE_5__["default"])(imageFrame.pixelData);
          imageFrame.smallestPixelValue = minMax.min;
          imageFrame.largestPixelValue = minMax.max;
        }
      }

      var image = {
        imageId: imageId,
        color: isColorImage,
        columnPixelSpacing: imagePlaneModule.columnPixelSpacing,
        columns: imageFrame.columns,
        height: imageFrame.rows,
        intercept: modalityLutModule.rescaleIntercept ? modalityLutModule.rescaleIntercept : 0,
        invert: imageFrame.photometricInterpretation === 'MONOCHROME1',
        minPixelValue: imageFrame.smallestPixelValue,
        maxPixelValue: imageFrame.largestPixelValue,
        rowPixelSpacing: imagePlaneModule.rowPixelSpacing,
        rows: imageFrame.rows,
        sizeInBytes: imageFrame.pixelData.length,
        slope: modalityLutModule.rescaleSlope ? modalityLutModule.rescaleSlope : 1,
        width: imageFrame.columns,
        windowCenter: voiLutModule.windowCenter ? voiLutModule.windowCenter[0] : undefined,
        windowWidth: voiLutModule.windowWidth ? voiLutModule.windowWidth[0] : undefined,
        decodeTimeInMS: imageFrame.decodeTimeInMS,
        floatPixelData: undefined
      }; // add function to return pixel data

      if (imageFrame.pixelData instanceof Float32Array) {
        var floatPixelData = imageFrame.pixelData;
        var results = convertToIntPixelData(floatPixelData);
        image.minPixelValue = results.min;
        image.maxPixelValue = results.max;
        image.slope = results.slope;
        image.intercept = results.intercept;
        image.floatPixelData = floatPixelData;

        image.getPixelData = function () {
          return results.intPixelData;
        };
      } else {
        image.getPixelData = function () {
          return imageFrame.pixelData;
        };
      }

      if (image.color) {
        image.getCanvas = function () {
          if (lastImageIdDrawn === imageId) {
            return canvas;
          }

          canvas.height = image.rows;
          canvas.width = image.columns;
          var context = canvas.getContext('2d');
          context.putImageData(imageFrame.imageData, 0, 0);
          lastImageIdDrawn = imageId;
          return canvas;
        };
      } // Modality LUT


      if (modalityLutModule.modalityLUTSequence && modalityLutModule.modalityLUTSequence.length > 0 && isModalityLUTForDisplay(sopCommonModule.sopClassUID)) {
        image.modalityLUT = modalityLutModule.modalityLUTSequence[0];
      } // VOI LUT


      if (voiLutModule.voiLUTSequence && voiLutModule.voiLUTSequence.length > 0) {
        image.voiLUT = voiLutModule.voiLUTSequence[0];
      }

      if (image.color) {
        image.windowWidth = 255;
        image.windowCenter = 127;
      } // set the ww/wc to cover the dynamic range of the image if no values are supplied


      if (image.windowCenter === undefined || image.windowWidth === undefined) {
        var maxVoi = image.maxPixelValue * image.slope + image.intercept;
        var minVoi = image.minPixelValue * image.slope + image.intercept;
        image.windowWidth = maxVoi - minVoi;
        image.windowCenter = (maxVoi + minVoi) / 2;
      }

      resolve(image);
    }, reject);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (createImage);

/***/ }),

/***/ "./imageLoader/decodeImageFrame.js":
/*!*****************************************!*\
  !*** ./imageLoader/decodeImageFrame.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_options_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/options.js */ "./imageLoader/internal/options.js");
/* harmony import */ var _webWorkerManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webWorkerManager.js */ "./imageLoader/webWorkerManager.js");
/* harmony import */ var _decodeJPEGBaseline8BitColor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decodeJPEGBaseline8BitColor.js */ "./imageLoader/decodeJPEGBaseline8BitColor.js");
/* harmony import */ var _shared_decodeImageFrame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/decodeImageFrame.js */ "./shared/decodeImageFrame.js");
/* harmony import */ var _shared_calculateMinMax_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/calculateMinMax.js */ "./shared/calculateMinMax.js");
/* harmony import */ var _shared_decoders_decodeJPEG2000_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/decoders/decodeJPEG2000.js */ "./shared/decoders/decodeJPEG2000.js");
/* harmony import */ var _shared_decoders_decodeJPEGLS_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/decoders/decodeJPEGLS.js */ "./shared/decoders/decodeJPEGLS.js");







var codecsInitialized = false;

function processDecodeTask(imageFrame, transferSyntax, pixelData, options) {
  var priority = options.priority || undefined;
  var transferList = options.transferPixelData ? [pixelData.buffer] : undefined;
  var loaderOptions = Object(_internal_options_js__WEBPACK_IMPORTED_MODULE_0__["getOptions"])();
  var strict = loaderOptions.strict,
      decodeConfig = loaderOptions.decodeConfig,
      useWebWorkers = loaderOptions.useWebWorkers;

  if (useWebWorkers === false) {
    if (codecsInitialized === false) {
      Object(_shared_decoders_decodeJPEG2000_js__WEBPACK_IMPORTED_MODULE_5__["initializeJPEG2000"])(decodeConfig);
      Object(_shared_decoders_decodeJPEGLS_js__WEBPACK_IMPORTED_MODULE_6__["initializeJPEGLS"])(decodeConfig);
      codecsInitialized = true;
    }

    return new Promise(function (resolve, reject) {
      try {
        var decodeArguments = [imageFrame, transferSyntax, pixelData, decodeConfig, options];
        var decodedImageFrame = _shared_decodeImageFrame_js__WEBPACK_IMPORTED_MODULE_3__["default"].apply(void 0, decodeArguments);
        Object(_shared_calculateMinMax_js__WEBPACK_IMPORTED_MODULE_4__["default"])(decodedImageFrame, strict);
        resolve(decodedImageFrame);
      } catch (error) {
        reject(error);
      }
    });
  }

  return _webWorkerManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].addTask('decodeTask', {
    imageFrame: imageFrame,
    transferSyntax: transferSyntax,
    pixelData: pixelData,
    options: options
  }, priority, transferList).promise;
}

function decodeImageFrame(imageFrame, transferSyntax, pixelData, canvas) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  // TODO: Turn this into a switch statement instead
  if (transferSyntax === '1.2.840.10008.1.2') {
    // Implicit VR Little Endian
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.1') {
    // Explicit VR Little Endian
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.2') {
    // Explicit VR Big Endian (retired)
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.1.99') {
    // Deflate transfer syntax (deflated by dicomParser)
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.5') {
    // RLE Lossless
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.50') {
    // JPEG Baseline lossy process 1 (8 bit)
    // Handle 8-bit JPEG Baseline color images using the browser's built-in
    // JPEG decoding
    if (imageFrame.bitsAllocated === 8 && (imageFrame.samplesPerPixel === 3 || imageFrame.samplesPerPixel === 4)) {
      return Object(_decodeJPEGBaseline8BitColor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(imageFrame, pixelData, canvas);
    }

    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.51') {
    // JPEG Baseline lossy process 2 & 4 (12 bit)
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.57') {
    // JPEG Lossless, Nonhierarchical (Processes 14)
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.70') {
    // JPEG Lossless, Nonhierarchical (Processes 14 [Selection 1])
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.80') {
    // JPEG-LS Lossless Image Compression
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.81') {
    // JPEG-LS Lossy (Near-Lossless) Image Compression
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.90') {
    // JPEG 2000 Lossless
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.91') {
    // JPEG 2000 Lossy
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  }
  /* Don't know if these work...
   // JPEG 2000 Part 2 Multicomponent Image Compression (Lossless Only)
   else if(transferSyntax === "1.2.840.10008.1.2.4.92")
   {
   return cornerstoneWADOImageLoader.decodeJPEG2000(dataSet, frame);
   }
   // JPEG 2000 Part 2 Multicomponent Image Compression
   else if(transferSyntax === "1.2.840.10008.1.2.4.93")
   {
   return cornerstoneWADOImageLoader.decodeJPEG2000(dataSet, frame);
   }
   */


  return new Promise(function (resolve, reject) {
    reject(new Error("No decoder for transfer syntax ".concat(transferSyntax)));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (decodeImageFrame);

/***/ }),

/***/ "./imageLoader/decodeJPEGBaseline8BitColor.js":
/*!****************************************************!*\
  !*** ./imageLoader/decodeJPEGBaseline8BitColor.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_getMinMax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/getMinMax.js */ "./shared/getMinMax.js");

/**
 * Special decoder for 8 bit jpeg that leverages the browser's built in JPEG decoder for increased performance
 */

function arrayBufferToString(buffer) {
  return binaryToString(String.fromCharCode.apply(null, Array.prototype.slice.apply(new Uint8Array(buffer))));
}

function binaryToString(binary) {
  var error;

  try {
    return decodeURIComponent(escape(binary));
  } catch (_error) {
    error = _error;

    if (error instanceof URIError) {
      return binary;
    }

    throw error;
  }
}

function decodeJPEGBaseline8BitColor(imageFrame, pixelData, canvas) {
  var start = new Date().getTime();
  var imgBlob = new Blob([pixelData], {
    type: 'image/jpeg'
  });
  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader();

    if (fileReader.readAsBinaryString === undefined) {
      fileReader.readAsArrayBuffer(imgBlob);
    } else {
      fileReader.readAsBinaryString(imgBlob); // doesn't work on IE11
    }

    fileReader.onload = function () {
      var img = new Image();

      img.onload = function () {
        canvas.height = img.height;
        canvas.width = img.width;
        imageFrame.rows = img.height;
        imageFrame.columns = img.width;
        var context = canvas.getContext('2d');
        context.drawImage(this, 0, 0);
        var imageData = context.getImageData(0, 0, img.width, img.height);
        var end = new Date().getTime();
        imageFrame.pixelData = imageData.data;
        imageFrame.imageData = imageData;
        imageFrame.decodeTimeInMS = end - start; // calculate smallest and largest PixelValue

        var minMax = Object(_shared_getMinMax_js__WEBPACK_IMPORTED_MODULE_0__["default"])(imageFrame.pixelData);
        imageFrame.smallestPixelValue = minMax.min;
        imageFrame.largestPixelValue = minMax.max;
        resolve(imageFrame);
      };

      img.onerror = function (error) {
        reject(error);
      };

      if (fileReader.readAsBinaryString === undefined) {
        img.src = "data:image/jpeg;base64,".concat(window.btoa(arrayBufferToString(fileReader.result)));
      } else {
        img.src = "data:image/jpeg;base64,".concat(window.btoa(fileReader.result)); // doesn't work on IE11
      }
    };

    fileReader.onerror = function (e) {
      reject(e);
    };
  });
}

/* harmony default export */ __webpack_exports__["default"] = (decodeJPEGBaseline8BitColor);

/***/ }),

/***/ "./imageLoader/getImageFrame.js":
/*!**************************************!*\
  !*** ./imageLoader/getImageFrame.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _externalModules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");


function getImageFrame(imageId) {
  var cornerstone = _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstone;
  var imagePixelModule = cornerstone.metaData.get('imagePixelModule', imageId);
  return {
    samplesPerPixel: imagePixelModule.samplesPerPixel,
    photometricInterpretation: imagePixelModule.photometricInterpretation,
    planarConfiguration: imagePixelModule.planarConfiguration,
    rows: imagePixelModule.rows,
    columns: imagePixelModule.columns,
    bitsAllocated: imagePixelModule.bitsAllocated,
    bitsStored: imagePixelModule.bitsStored,
    pixelRepresentation: imagePixelModule.pixelRepresentation,
    // 0 = unsigned,
    smallestPixelValue: imagePixelModule.smallestPixelValue,
    largestPixelValue: imagePixelModule.largestPixelValue,
    redPaletteColorLookupTableDescriptor: imagePixelModule.redPaletteColorLookupTableDescriptor,
    greenPaletteColorLookupTableDescriptor: imagePixelModule.greenPaletteColorLookupTableDescriptor,
    bluePaletteColorLookupTableDescriptor: imagePixelModule.bluePaletteColorLookupTableDescriptor,
    redPaletteColorLookupTableData: imagePixelModule.redPaletteColorLookupTableData,
    greenPaletteColorLookupTableData: imagePixelModule.greenPaletteColorLookupTableData,
    bluePaletteColorLookupTableData: imagePixelModule.bluePaletteColorLookupTableData,
    pixelData: undefined // populated later after decoding

  };
}

/* harmony default export */ __webpack_exports__["default"] = (getImageFrame);

/***/ }),

/***/ "./imageLoader/index.js":
/*!******************************!*\
  !*** ./imageLoader/index.js ***!
  \******************************/
/*! exports provided: convertRGBColorByPixel, convertRGBColorByPlane, convertYBRFullByPixel, convertYBRFullByPlane, convertPALETTECOLOR, wadouri, wadors, configure, convertColorSpace, createImage, decodeImageFrame, decodeJPEGBaseline8BitColor, getImageFrame, getMinMax, isColorImage, isJPEGBaseline8BitColor, webWorkerManager, version, internal, external, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorSpaceConverters/index.js */ "./imageLoader/colorSpaceConverters/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertRGBColorByPixel", function() { return _colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__["convertRGBColorByPixel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertRGBColorByPlane", function() { return _colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__["convertRGBColorByPlane"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertYBRFullByPixel", function() { return _colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__["convertYBRFullByPixel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertYBRFullByPlane", function() { return _colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__["convertYBRFullByPlane"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertPALETTECOLOR", function() { return _colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__["convertPALETTECOLOR"]; });

/* harmony import */ var _wadouri_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wadouri/index.js */ "./imageLoader/wadouri/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wadouri", function() { return _wadouri_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _wadors_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wadors/index.js */ "./imageLoader/wadors/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wadors", function() { return _wadors_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _configure_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configure.js */ "./imageLoader/configure.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return _configure_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _convertColorSpace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./convertColorSpace.js */ "./imageLoader/convertColorSpace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertColorSpace", function() { return _convertColorSpace_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _createImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createImage.js */ "./imageLoader/createImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createImage", function() { return _createImage_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _decodeImageFrame_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decodeImageFrame.js */ "./imageLoader/decodeImageFrame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeImageFrame", function() { return _decodeImageFrame_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _decodeJPEGBaseline8BitColor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decodeJPEGBaseline8BitColor.js */ "./imageLoader/decodeJPEGBaseline8BitColor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeJPEGBaseline8BitColor", function() { return _decodeJPEGBaseline8BitColor_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _getImageFrame_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getImageFrame.js */ "./imageLoader/getImageFrame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageFrame", function() { return _getImageFrame_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _shared_getMinMax_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/getMinMax.js */ "./shared/getMinMax.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMinMax", function() { return _shared_getMinMax_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _isColorImage_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isColorImage.js */ "./imageLoader/isColorImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isColorImage", function() { return _isColorImage_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _isJPEGBaseline8BitColor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./isJPEGBaseline8BitColor.js */ "./imageLoader/isJPEGBaseline8BitColor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isJPEGBaseline8BitColor", function() { return _isJPEGBaseline8BitColor_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _webWorkerManager_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./webWorkerManager.js */ "./imageLoader/webWorkerManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webWorkerManager", function() { return _webWorkerManager_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../version.js */ "./version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _internal_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./internal/index.js */ "./imageLoader/internal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "internal", function() { return _internal_index_js__WEBPACK_IMPORTED_MODULE_14__["internal"]; });

/* harmony import */ var _externalModules_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "external", function() { return _externalModules_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

















var cornerstoneWADOImageLoader = {
  convertRGBColorByPixel: _colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__["convertRGBColorByPixel"],
  convertRGBColorByPlane: _colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__["convertRGBColorByPlane"],
  convertYBRFullByPixel: _colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__["convertYBRFullByPixel"],
  convertYBRFullByPlane: _colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__["convertYBRFullByPlane"],
  convertPALETTECOLOR: _colorSpaceConverters_index_js__WEBPACK_IMPORTED_MODULE_0__["convertPALETTECOLOR"],
  wadouri: _wadouri_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  wadors: _wadors_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  configure: _configure_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  convertColorSpace: _convertColorSpace_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  createImage: _createImage_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  decodeImageFrame: _decodeImageFrame_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  decodeJPEGBaseline8BitColor: _decodeJPEGBaseline8BitColor_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  getImageFrame: _getImageFrame_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  getMinMax: _shared_getMinMax_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  isColorImage: _isColorImage_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  isJPEGBaseline8BitColor: _isJPEGBaseline8BitColor_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  webWorkerManager: _webWorkerManager_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  version: _version_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  internal: _internal_index_js__WEBPACK_IMPORTED_MODULE_14__["internal"],
  external: _externalModules_js__WEBPACK_IMPORTED_MODULE_15__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (cornerstoneWADOImageLoader);

/***/ }),

/***/ "./imageLoader/internal/index.js":
/*!***************************************!*\
  !*** ./imageLoader/internal/index.js ***!
  \***************************************/
/*! exports provided: setOptions, getOptions, xhrRequest, internal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internal", function() { return internal; });
/* harmony import */ var _xhrRequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xhrRequest.js */ "./imageLoader/internal/xhrRequest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xhrRequest", function() { return _xhrRequest_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.js */ "./imageLoader/internal/options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setOptions", function() { return _options_js__WEBPACK_IMPORTED_MODULE_1__["setOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOptions", function() { return _options_js__WEBPACK_IMPORTED_MODULE_1__["getOptions"]; });



var internal = {
  xhrRequest: _xhrRequest_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  setOptions: _options_js__WEBPACK_IMPORTED_MODULE_1__["setOptions"],
  getOptions: _options_js__WEBPACK_IMPORTED_MODULE_1__["getOptions"]
};


/***/ }),

/***/ "./imageLoader/internal/options.js":
/*!*****************************************!*\
  !*** ./imageLoader/internal/options.js ***!
  \*****************************************/
/*! exports provided: setOptions, getOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOptions", function() { return setOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptions", function() { return getOptions; });
var options = {
  // callback allowing customization of the xhr (e.g. adding custom auth headers, cors, etc)
  beforeSend: function beforeSend()
  /* xhr, imageId */
  {},
  // callback allowing modification of newly created image objects
  imageCreated: function imageCreated()
  /* image */
  {},
  strict: false,
  useWebWorkers: true,
  decodeConfig: {
    usePDFJS: false
  }
};
function setOptions(newOptions) {
  options = Object.assign(options, newOptions);
}
function getOptions() {
  return options;
}

/***/ }),

/***/ "./imageLoader/internal/xhrRequest.js":
/*!********************************************!*\
  !*** ./imageLoader/internal/xhrRequest.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _externalModules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../externalModules.js */ "./externalModules.js");
/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.js */ "./imageLoader/internal/options.js");



function xhrRequest(url, imageId) {
  var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var cornerstone = _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstone;
  var options = Object(_options_js__WEBPACK_IMPORTED_MODULE_1__["getOptions"])(); // Make the request for the DICOM P10 SOP Instance

  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'arraybuffer';
    options.beforeSend(xhr, imageId, headers, params);
    Object.keys(headers).forEach(function (key) {
      xhr.setRequestHeader(key, headers[key]);
    });
    params.deferred = {
      resolve: resolve,
      reject: reject
    };
    params.url = url;
    params.imageId = imageId; // Event triggered when downloading an image starts

    xhr.onloadstart = function (event) {
      // Action
      if (options.onloadstart) {
        options.onloadstart(event, params);
      } // Event


      var eventData = {
        url: url,
        imageId: imageId
      };
      cornerstone.triggerEvent(cornerstone.events, 'cornerstoneimageloadstart', eventData);
    }; // Event triggered when downloading an image ends


    xhr.onloadend = function (event) {
      // Action
      if (options.onloadend) {
        options.onloadend(event, params);
      }

      var eventData = {
        url: url,
        imageId: imageId
      }; // Event

      cornerstone.triggerEvent(cornerstone.events, 'cornerstoneimageloadend', eventData);
    }; // handle response data


    xhr.onreadystatechange = function (event) {
      // Action
      if (options.onreadystatechange) {
        options.onreadystatechange(event, params);
        return;
      } // Default action
      // TODO: consider sending out progress messages here as we receive the pixel data


      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.response, xhr);
        } else {
          // request failed, reject the Promise
          reject(xhr);
        }
      }
    }; // Event triggered when downloading an image progresses


    xhr.onprogress = function (oProgress) {
      // console.log('progress:',oProgress)
      var loaded = oProgress.loaded; // evt.loaded the bytes browser receive

      var total;
      var percentComplete;

      if (oProgress.lengthComputable) {
        total = oProgress.total; // evt.total the total bytes seted by the header

        percentComplete = Math.round(loaded / total * 100);
      } // Action


      if (options.onprogress) {
        options.onprogress(oProgress, params);
      } // Event


      var eventData = {
        url: url,
        imageId: imageId,
        loaded: loaded,
        total: total,
        percentComplete: percentComplete
      };
      cornerstone.triggerEvent(cornerstone.events, 'cornerstoneimageloadprogress', eventData);
    };

    xhr.send();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (xhrRequest);

/***/ }),

/***/ "./imageLoader/isColorImage.js":
/*!*************************************!*\
  !*** ./imageLoader/isColorImage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (photoMetricInterpretation) {
  return photoMetricInterpretation === 'RGB' || photoMetricInterpretation === 'PALETTE COLOR' || photoMetricInterpretation === 'YBR_FULL' || photoMetricInterpretation === 'YBR_FULL_422' || photoMetricInterpretation === 'YBR_PARTIAL_422' || photoMetricInterpretation === 'YBR_PARTIAL_420' || photoMetricInterpretation === 'YBR_RCT' || photoMetricInterpretation === 'YBR_ICT';
});

/***/ }),

/***/ "./imageLoader/isJPEGBaseline8BitColor.js":
/*!************************************************!*\
  !*** ./imageLoader/isJPEGBaseline8BitColor.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isJPEGBaseline8BitColor(imageFrame, transferSyntax) {
  transferSyntax = transferSyntax || imageFrame.transferSyntax;

  if (imageFrame.bitsAllocated === 8 && transferSyntax === '1.2.840.10008.1.2.4.50' && (imageFrame.samplesPerPixel === 3 || imageFrame.samplesPerPixel === 4)) {
    return true;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (isJPEGBaseline8BitColor);

/***/ }),

/***/ "./imageLoader/registerLoaders.js":
/*!****************************************!*\
  !*** ./imageLoader/registerLoaders.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wadors_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wadors/index.js */ "./imageLoader/wadors/index.js");
/* harmony import */ var _wadouri_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wadouri/index.js */ "./imageLoader/wadouri/index.js");


/**
 * Register the WADO-URI and WADO-RS image loaders and metaData providers
 * with an instance of Cornerstone Core.
 *
 * @param cornerstone The Cornerstone Core library to register the image loaders with
 */

function registerLoaders(cornerstone) {
  _wadors_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].register(cornerstone);
  _wadouri_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].register(cornerstone);
}

/* harmony default export */ __webpack_exports__["default"] = (registerLoaders);

/***/ }),

/***/ "./imageLoader/wadors/findIndexOfString.js":
/*!*************************************************!*\
  !*** ./imageLoader/wadors/findIndexOfString.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function checkToken(token, data, dataOffset) {
  if (dataOffset + token.length > data.length) {
    return false;
  }

  var endIndex = dataOffset;

  for (var i = 0; i < token.length; i++) {
    if (token[i] !== data[endIndex++]) {
      return false;
    }
  }

  return true;
}

function stringToUint8Array(str) {
  var uint = new Uint8Array(str.length);

  for (var i = 0, j = str.length; i < j; i++) {
    uint[i] = str.charCodeAt(i);
  }

  return uint;
}

function findIndexOfString(data, str, offset) {
  offset = offset || 0;
  var token = stringToUint8Array(str);

  for (var i = offset; i < data.length; i++) {
    if (token[0] === data[i]) {
      // console.log('match @', i);
      if (checkToken(token, data, i)) {
        return i;
      }
    }
  }

  return -1;
}

/* harmony default export */ __webpack_exports__["default"] = (findIndexOfString);

/***/ }),

/***/ "./imageLoader/wadors/getPixelData.js":
/*!********************************************!*\
  !*** ./imageLoader/wadors/getPixelData.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/index.js */ "./imageLoader/internal/index.js");
/* harmony import */ var _findIndexOfString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findIndexOfString.js */ "./imageLoader/wadors/findIndexOfString.js");



function findBoundary(header) {
  for (var i = 0; i < header.length; i++) {
    if (header[i].substr(0, 2) === '--') {
      return header[i];
    }
  }
}

function findContentType(header) {
  for (var i = 0; i < header.length; i++) {
    if (header[i].substr(0, 13) === 'Content-Type:') {
      return header[i].substr(13).trim();
    }
  }
}

function uint8ArrayToString(data, offset, length) {
  offset = offset || 0;
  length = length || data.length - offset;
  var str = '';

  for (var i = offset; i < offset + length; i++) {
    str += String.fromCharCode(data[i]);
  }

  return str;
}

function getPixelData(uri, imageId) {
  var mediaType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'application/octet-stream';
  var headers = {
    accept: mediaType
  };
  return new Promise(function (resolve, reject) {
    var loadPromise = Object(_internal_index_js__WEBPACK_IMPORTED_MODULE_0__["xhrRequest"])(uri, imageId, headers);
    loadPromise.then(function (imageFrameAsArrayBuffer
    /* , xhr*/
    ) {
      // request succeeded, Parse the multi-part mime response
      var response = new Uint8Array(imageFrameAsArrayBuffer); // First look for the multipart mime header

      var tokenIndex = Object(_findIndexOfString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(response, '\r\n\r\n');

      if (tokenIndex === -1) {
        reject(new Error('invalid response - no multipart mime header'));
      }

      var header = uint8ArrayToString(response, 0, tokenIndex); // Now find the boundary  marker

      var split = header.split('\r\n');
      var boundary = findBoundary(split);

      if (!boundary) {
        reject(new Error('invalid response - no boundary marker'));
      }

      var offset = tokenIndex + 4; // skip over the \r\n\r\n
      // find the terminal boundary marker

      var endIndex = Object(_findIndexOfString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(response, boundary, offset);

      if (endIndex === -1) {
        reject(new Error('invalid response - terminating boundary not found'));
      } // Remove \r\n from the length


      var length = endIndex - offset - 2; // return the info for this pixel data

      resolve({
        contentType: findContentType(split),
        imageFrame: {
          pixelData: new Uint8Array(imageFrameAsArrayBuffer, offset, length)
        }
      });
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (getPixelData);

/***/ }),

/***/ "./imageLoader/wadors/index.js":
/*!*************************************!*\
  !*** ./imageLoader/wadors/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _metaData_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metaData/index.js */ "./imageLoader/wadors/metaData/index.js");
/* harmony import */ var _findIndexOfString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findIndexOfString.js */ "./imageLoader/wadors/findIndexOfString.js");
/* harmony import */ var _getPixelData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getPixelData.js */ "./imageLoader/wadors/getPixelData.js");
/* harmony import */ var _metaDataManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metaDataManager.js */ "./imageLoader/wadors/metaDataManager.js");
/* harmony import */ var _loadImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadImage.js */ "./imageLoader/wadors/loadImage.js");
/* harmony import */ var _register_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.js */ "./imageLoader/wadors/register.js");






var metaData = {
  getNumberString: _metaData_index_js__WEBPACK_IMPORTED_MODULE_0__["getNumberString"],
  getNumberValue: _metaData_index_js__WEBPACK_IMPORTED_MODULE_0__["getNumberValue"],
  getNumberValues: _metaData_index_js__WEBPACK_IMPORTED_MODULE_0__["getNumberValues"],
  getValue: _metaData_index_js__WEBPACK_IMPORTED_MODULE_0__["getValue"],
  metaDataProvider: _metaData_index_js__WEBPACK_IMPORTED_MODULE_0__["metaDataProvider"]
};
/* harmony default export */ __webpack_exports__["default"] = ({
  metaData: metaData,
  findIndexOfString: _findIndexOfString_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  getPixelData: _getPixelData_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  loadImage: _loadImage_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  metaDataManager: _metaDataManager_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  register: _register_js__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./imageLoader/wadors/loadImage.js":
/*!*****************************************!*\
  !*** ./imageLoader/wadors/loadImage.js ***!
  \*****************************************/
/*! exports provided: getTransferSyntaxForContentType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransferSyntaxForContentType", function() { return getTransferSyntaxForContentType; });
/* harmony import */ var _metaDataManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metaDataManager.js */ "./imageLoader/wadors/metaDataManager.js");
/* harmony import */ var _getPixelData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPixelData.js */ "./imageLoader/wadors/getPixelData.js");
/* harmony import */ var _createImage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createImage.js */ "./imageLoader/createImage.js");



/**
 * Helper method to extract the transfer-syntax from the response of the server.
 * @param {string} contentType The value of the content-type header as returned by the WADO-RS server.
 * @return The transfer-syntax as announced by the server, or Implicit Little Endian by default.
 */

function getTransferSyntaxForContentType(contentType) {
  var defaultTransferSyntax = '1.2.840.10008.1.2'; // Default is Implicit Little Endian.

  if (!contentType) {
    return defaultTransferSyntax;
  } // Browse through the content type parameters


  var parameters = contentType.split(';');
  var params = {};
  parameters.forEach(function (parameter) {
    // Look for a transfer-syntax=XXXX pair
    var parameterValues = parameter.split('=');

    if (parameterValues.length !== 2) {
      return;
    }

    var value = parameterValues[1].trim().replace(/"/g, '');
    params[parameterValues[0].trim()] = value;
  }); // This is useful if the PACS doesn't respond with a syntax
  // in the content type.
  // http://dicom.nema.org/medical/dicom/current/output/chtml/part18/chapter_6.html#table_6.1.1.8-3b

  var defaultTransferSyntaxByType = {
    'image/jpeg': '1.2.840.10008.1.2.4.70',
    'image/x-dicom-rle': '1.2.840.10008.1.2.5',
    'image/x-jls': '1.2.840.10008.1.2.4.80',
    'image/jp2': '1.2.840.10008.1.2.4.90',
    'image/jpx': '1.2.840.10008.1.2.4.92'
  };

  if (params['transfer-syntax']) {
    return params['transfer-syntax'];
  } else if (contentType && !Object.keys(params).length && defaultTransferSyntaxByType[contentType]) {
    // dcm4che seems to be reporting the content type as just 'image/jp2'?
    return defaultTransferSyntaxByType[contentType];
  } else if (params.type && defaultTransferSyntaxByType[params.type]) {
    return defaultTransferSyntaxByType[params.type];
  }

  return defaultTransferSyntax;
}

function loadImage(imageId, options) {
  var start = new Date().getTime();
  var uri = imageId.substring(7);
  var promise = new Promise(function (resolve, reject) {
    // check to make sure we have metadata for this imageId
    var metaData = _metaDataManager_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(imageId);

    if (metaData === undefined) {
      var error = new Error("no metadata for imageId ".concat(imageId));
      return reject(error);
    } // TODO: load bulk data items that we might need


    var mediaType = 'multipart/related; type="application/octet-stream"'; // 'image/dicom+jp2';
    // get the pixel data from the server

    Object(_getPixelData_js__WEBPACK_IMPORTED_MODULE_1__["default"])(uri, imageId, mediaType).then(function (result) {
      var transferSyntax = getTransferSyntaxForContentType(result.contentType);
      var pixelData = result.imageFrame.pixelData;
      var imagePromise = Object(_createImage_js__WEBPACK_IMPORTED_MODULE_2__["default"])(imageId, pixelData, transferSyntax, options);
      imagePromise.then(function (image) {
        // add the loadTimeInMS property
        var end = new Date().getTime();
        image.loadTimeInMS = end - start;
        resolve(image);
      }, reject);
    }, reject);
  });
  return {
    promise: promise,
    cancelFn: undefined
  };
}

/* harmony default export */ __webpack_exports__["default"] = (loadImage);

/***/ }),

/***/ "./imageLoader/wadors/metaData/getNumberString.js":
/*!********************************************************!*\
  !*** ./imageLoader/wadors/metaData/getNumberString.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getValue.js */ "./imageLoader/wadors/metaData/getValue.js");

/**
 * Returns the first string value as a Javascript number
 *
 * @param element - The javascript object for the specified element in the metadata
 * @param [index] - the index of the value in a multi-valued element, default is 0
 * @param [defaultValue] - The default value to return if the element does not exist
 * @returns {*}
 */

function getNumberString(element, index, defaultValue) {
  var value = Object(_getValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element, index, defaultValue);

  if (value === undefined) {
    return;
  }

  return parseFloat(value);
}

/* harmony default export */ __webpack_exports__["default"] = (getNumberString);

/***/ }),

/***/ "./imageLoader/wadors/metaData/getNumberValue.js":
/*!*******************************************************!*\
  !*** ./imageLoader/wadors/metaData/getNumberValue.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getValue.js */ "./imageLoader/wadors/metaData/getValue.js");


function getNumberValue(element, index) {
  var value = Object(_getValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element, index);

  if (value === undefined) {
    return;
  }

  return parseFloat(value);
}

/* harmony default export */ __webpack_exports__["default"] = (getNumberValue);

/***/ }),

/***/ "./imageLoader/wadors/metaData/getNumberValues.js":
/*!********************************************************!*\
  !*** ./imageLoader/wadors/metaData/getNumberValues.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns the values as an array of javascript numbers
 *
 * @param element - The javascript object for the specified element in the metadata
 * @param [minimumLength] - the minimum number of values
 * @returns {*}
 */
function getNumberValues(element, minimumLength) {
  if (!element) {
    return;
  } // Value is not present if the attribute has a zero length value


  if (!element.Value) {
    return;
  } // make sure we have the expected length


  if (minimumLength && element.Value.length < minimumLength) {
    return;
  }

  var values = [];

  for (var i = 0; i < element.Value.length; i++) {
    values.push(parseFloat(element.Value[i]));
  }

  return values;
}

/* harmony default export */ __webpack_exports__["default"] = (getNumberValues);

/***/ }),

/***/ "./imageLoader/wadors/metaData/getValue.js":
/*!*************************************************!*\
  !*** ./imageLoader/wadors/metaData/getValue.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns the raw value
 *
 * @param element - The javascript object for the specified element in the metadata
 * @param [index] - the index of the value in a multi-valued element, default is 0
 * @param [defaultValue] - The default value to return if the element does not exist
 * @returns {*}
 */
function getValue(element, index, defaultValue) {
  index = index || 0;

  if (!element) {
    return defaultValue;
  } // Value is not present if the attribute has a zero length value


  if (!element.Value) {
    return defaultValue;
  } // make sure we have the specified index


  if (element.Value.length <= index) {
    return defaultValue;
  }

  return element.Value[index];
}

/* harmony default export */ __webpack_exports__["default"] = (getValue);

/***/ }),

/***/ "./imageLoader/wadors/metaData/index.js":
/*!**********************************************!*\
  !*** ./imageLoader/wadors/metaData/index.js ***!
  \**********************************************/
/*! exports provided: getNumberString, getNumberValue, getNumberValues, getValue, metaDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNumberString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNumberString.js */ "./imageLoader/wadors/metaData/getNumberString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberString", function() { return _getNumberString_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _getNumberValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNumberValue.js */ "./imageLoader/wadors/metaData/getNumberValue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberValue", function() { return _getNumberValue_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _getNumberValues_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNumberValues.js */ "./imageLoader/wadors/metaData/getNumberValues.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberValues", function() { return _getNumberValues_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getValue.js */ "./imageLoader/wadors/metaData/getValue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return _getValue_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _metaDataProvider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metaDataProvider.js */ "./imageLoader/wadors/metaData/metaDataProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metaDataProvider", function() { return _metaDataProvider_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./imageLoader/wadors/metaData/metaDataProvider.js":
/*!*********************************************************!*\
  !*** ./imageLoader/wadors/metaData/metaDataProvider.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _externalModules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../externalModules.js */ "./externalModules.js");
/* harmony import */ var _getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNumberValues.js */ "./imageLoader/wadors/metaData/getNumberValues.js");
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getValue.js */ "./imageLoader/wadors/metaData/getValue.js");
/* harmony import */ var _getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNumberValue.js */ "./imageLoader/wadors/metaData/getNumberValue.js");
/* harmony import */ var _metaDataManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metaDataManager.js */ "./imageLoader/wadors/metaDataManager.js");






function metaDataProvider(type, imageId) {
  var dicomParser = _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].dicomParser;
  var metaData = _metaDataManager_js__WEBPACK_IMPORTED_MODULE_4__["default"].get(imageId);

  if (!metaData) {
    return;
  }

  if (type === 'generalSeriesModule') {
    return {
      modality: Object(_getValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(metaData['00080060']),
      seriesInstanceUID: Object(_getValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(metaData['0020000e']),
      seriesNumber: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00200011']),
      studyInstanceUID: Object(_getValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(metaData['0020000d']),
      seriesDate: dicomParser.parseDA(Object(_getValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(metaData['00080021'])),
      seriesTime: dicomParser.parseTM(Object(_getValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(metaData['00080031'], 0, ''))
    };
  }

  if (type === 'patientStudyModule') {
    return {
      patientAge: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00101010']),
      patientSize: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00101020']),
      patientWeight: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00101030'])
    };
  }

  if (type === 'imagePlaneModule') {
    var imageOrientationPatient = Object(_getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__["default"])(metaData['00200037'], 6);
    var imagePositionPatient = Object(_getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__["default"])(metaData['00200032'], 3);
    var pixelSpacing = Object(_getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__["default"])(metaData['00280030'], 2);
    var columnPixelSpacing = null;
    var rowPixelSpacing = null;

    if (pixelSpacing) {
      rowPixelSpacing = pixelSpacing[0];
      columnPixelSpacing = pixelSpacing[1];
    }

    var rowCosines = null;
    var columnCosines = null;

    if (imageOrientationPatient) {
      rowCosines = [parseFloat(imageOrientationPatient[0]), parseFloat(imageOrientationPatient[1]), parseFloat(imageOrientationPatient[2])];
      columnCosines = [parseFloat(imageOrientationPatient[3]), parseFloat(imageOrientationPatient[4]), parseFloat(imageOrientationPatient[5])];
    }

    return {
      frameOfReferenceUID: Object(_getValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(metaData['00200052']),
      rows: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00280010']),
      columns: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00280011']),
      imageOrientationPatient: imageOrientationPatient,
      rowCosines: rowCosines,
      columnCosines: columnCosines,
      imagePositionPatient: imagePositionPatient,
      sliceThickness: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00180050']),
      sliceLocation: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00201041']),
      pixelSpacing: pixelSpacing,
      rowPixelSpacing: rowPixelSpacing,
      columnPixelSpacing: columnPixelSpacing
    };
  }

  if (type === 'imagePixelModule') {
    return {
      samplesPerPixel: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00280002']),
      photometricInterpretation: Object(_getValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(metaData['00280004']),
      rows: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00280010']),
      columns: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00280011']),
      bitsAllocated: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00280100']),
      bitsStored: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00280101']),
      highBit: Object(_getValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(metaData['00280102']),
      pixelRepresentation: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00280103']),
      planarConfiguration: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00280006']),
      pixelAspectRatio: Object(_getValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(metaData['00280034']),
      smallestPixelValue: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00280106']),
      largestPixelValue: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00280107']),
      redPaletteColorLookupTableDescriptor: Object(_getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__["default"])(metaData['00281101']),
      greenPaletteColorLookupTableDescriptor: Object(_getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__["default"])(metaData['00281102']),
      bluePaletteColorLookupTableDescriptor: Object(_getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__["default"])(metaData['00281103']),
      redPaletteColorLookupTableData: Object(_getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__["default"])(metaData['00281201']),
      greenPaletteColorLookupTableData: Object(_getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__["default"])(metaData['00281202']),
      bluePaletteColorLookupTableData: Object(_getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__["default"])(metaData['00281203'])
    };
  }

  if (type === 'voiLutModule') {
    return {
      // TODO VOT LUT Sequence
      windowCenter: Object(_getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__["default"])(metaData['00281050'], 1),
      windowWidth: Object(_getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__["default"])(metaData['00281051'], 1)
    };
  }

  if (type === 'modalityLutModule') {
    return {
      // TODO VOT LUT Sequence
      rescaleIntercept: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00281052']),
      rescaleSlope: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(metaData['00281053']),
      rescaleType: Object(_getValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(metaData['00281054'])
    };
  }

  if (type === 'sopCommonModule') {
    return {
      sopClassUID: Object(_getValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(metaData['00080016']),
      sopInstanceUID: Object(_getValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(metaData['00080018'])
    };
  }

  if (type === 'petIsotopeModule') {
    var radiopharmaceuticalInfo = Object(_getValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(metaData['00540016']);

    if (radiopharmaceuticalInfo === undefined) {
      return;
    }

    return {
      radiopharmaceuticalInfo: {
        radiopharmaceuticalStartTime: dicomParser.parseTM(Object(_getValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(radiopharmaceuticalInfo['00181072'], 0, '')),
        radionuclideTotalDose: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(radiopharmaceuticalInfo['00181074']),
        radionuclideHalfLife: Object(_getNumberValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(radiopharmaceuticalInfo['00181075'])
      }
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (metaDataProvider);

/***/ }),

/***/ "./imageLoader/wadors/metaDataManager.js":
/*!***********************************************!*\
  !*** ./imageLoader/wadors/metaDataManager.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var imageIds = [];

function add(imageId, metadata) {
  imageIds[imageId] = metadata;
}

function get(imageId) {
  return imageIds[imageId];
}

function remove(imageId) {
  imageIds[imageId] = undefined;
}

function purge() {
  imageIds = [];
}

/* harmony default export */ __webpack_exports__["default"] = ({
  add: add,
  get: get,
  remove: remove,
  purge: purge
});

/***/ }),

/***/ "./imageLoader/wadors/register.js":
/*!****************************************!*\
  !*** ./imageLoader/wadors/register.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImage.js */ "./imageLoader/wadors/loadImage.js");
/* harmony import */ var _metaData_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metaData/index.js */ "./imageLoader/wadors/metaData/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (cornerstone) {
  // register wadors scheme and metadata provider
  cornerstone.registerImageLoader('wadors', _loadImage_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  cornerstone.metaData.addProvider(_metaData_index_js__WEBPACK_IMPORTED_MODULE_1__["metaDataProvider"]);
});

/***/ }),

/***/ "./imageLoader/wadouri/dataSetCacheManager.js":
/*!****************************************************!*\
  !*** ./imageLoader/wadouri/dataSetCacheManager.js ***!
  \****************************************************/
/*! exports provided: getInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
/* harmony import */ var _externalModules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../externalModules.js */ "./externalModules.js");
/* harmony import */ var _internal_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal/index.js */ "./imageLoader/internal/index.js");


/**
 * This object supports loading of DICOM P10 dataset from a uri and caching it so it can be accessed
 * by the caller.  This allows a caller to access the datasets without having to go through cornerstone's
 * image loader mechanism.  One reason a caller may need to do this is to determine the number of frames
 * in a multiframe sop instance so it can create the imageId's correctly.
 */

var cacheSizeInBytes = 0;
var loadedDataSets = {};
var promises = {}; // returns true if the wadouri for the specified index has been loaded

function isLoaded(uri) {
  return loadedDataSets[uri] !== undefined;
}

function get(uri) {
  if (!loadedDataSets[uri]) {
    return;
  }

  return loadedDataSets[uri].dataSet;
} // loads the dicom dataset from the wadouri sp


function load(uri) {
  var loadRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _internal_index_js__WEBPACK_IMPORTED_MODULE_1__["xhrRequest"];
  var imageId = arguments.length > 2 ? arguments[2] : undefined;
  var cornerstone = _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstone,
      dicomParser = _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].dicomParser; // if already loaded return it right away

  if (loadedDataSets[uri]) {
    // console.log('using loaded dataset ' + uri);
    return new Promise(function (resolve) {
      loadedDataSets[uri].cacheCount++;
      resolve(loadedDataSets[uri].dataSet);
    });
  } // if we are currently loading this uri, increment the cacheCount and return its promise


  if (promises[uri]) {
    // console.log('returning existing load promise for ' + uri);
    promises[uri].cacheCount++;
    return promises[uri];
  } // This uri is not loaded or being loaded, load it via an xhrRequest


  var loadDICOMPromise = loadRequest(uri, imageId); // handle success and failure of the XHR request load

  var promise = new Promise(function (resolve, reject) {
    loadDICOMPromise.then(function (dicomPart10AsArrayBuffer
    /* , xhr*/
    ) {
      var byteArray = new Uint8Array(dicomPart10AsArrayBuffer); // Reject the promise if parsing the dicom file fails

      var dataSet;

      try {
        dataSet = dicomParser.parseDicom(byteArray);
      } catch (error) {
        return reject(error);
      }

      loadedDataSets[uri] = {
        dataSet: dataSet,
        cacheCount: promise.cacheCount
      };
      cacheSizeInBytes += dataSet.byteArray.length;
      resolve(dataSet);
      cornerstone.triggerEvent(cornerstone.events, 'datasetscachechanged', {
        uri: uri,
        action: 'loaded',
        cacheInfo: getInfo()
      });
    }, reject).then(function () {
      // Remove the promise if success
      delete promises[uri];
    }, function () {
      // Remove the promise if failure
      delete promises[uri];
    });
  });
  promise.cacheCount = 1;
  promises[uri] = promise;
  return promise;
} // remove the cached/loaded dicom dataset for the specified wadouri to free up memory


function unload(uri) {
  var cornerstone = _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstone; // console.log('unload for ' + uri);

  if (loadedDataSets[uri]) {
    loadedDataSets[uri].cacheCount--;

    if (loadedDataSets[uri].cacheCount === 0) {
      // console.log('removing loaded dataset for ' + uri);
      cacheSizeInBytes -= loadedDataSets[uri].dataSet.byteArray.length;
      delete loadedDataSets[uri];
      cornerstone.triggerEvent(cornerstone.events, 'datasetscachechanged', {
        uri: uri,
        action: 'unloaded',
        cacheInfo: getInfo()
      });
    }
  }
}

function getInfo() {
  return {
    cacheSizeInBytes: cacheSizeInBytes,
    numberOfDataSetsCached: Object.keys(loadedDataSets).length
  };
} // removes all cached datasets from memory

function purge() {
  loadedDataSets = {};
  promises = {};
}

/* harmony default export */ __webpack_exports__["default"] = ({
  isLoaded: isLoaded,
  load: load,
  unload: unload,
  getInfo: getInfo,
  purge: purge,
  get: get
});

/***/ }),

/***/ "./imageLoader/wadouri/fileManager.js":
/*!********************************************!*\
  !*** ./imageLoader/wadouri/fileManager.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var files = [];

function add(file) {
  var fileIndex = files.push(file);
  return "dicomfile:".concat(fileIndex - 1);
}

function get(index) {
  return files[index];
}

function remove(index) {
  files[index] = undefined;
}

function purge() {
  files = [];
}

/* harmony default export */ __webpack_exports__["default"] = ({
  add: add,
  get: get,
  remove: remove,
  purge: purge
});

/***/ }),

/***/ "./imageLoader/wadouri/getEncapsulatedImageFrame.js":
/*!**********************************************************!*\
  !*** ./imageLoader/wadouri/getEncapsulatedImageFrame.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getEncapsulatedImageFrame; });
/* harmony import */ var _externalModules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../externalModules.js */ "./externalModules.js");

/**
 * Function to deal with extracting an image frame from an encapsulated data set.
 */

function framesAreFragmented(dataSet) {
  var numberOfFrames = dataSet.intString('x00280008');
  var pixelDataElement = dataSet.elements.x7fe00010;
  return numberOfFrames !== pixelDataElement.fragments.length;
}

function getEncapsulatedImageFrame(dataSet, frameIndex) {
  var dicomParser = _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].dicomParser;

  if (dataSet.elements.x7fe00010 && dataSet.elements.x7fe00010.basicOffsetTable.length) {
    // Basic Offset Table is not empty
    return dicomParser.readEncapsulatedImageFrame(dataSet, dataSet.elements.x7fe00010, frameIndex);
  } // Empty basic offset table


  if (framesAreFragmented(dataSet)) {
    var basicOffsetTable = dicomParser.createJPEGBasicOffsetTable(dataSet, dataSet.elements.x7fe00010);
    return dicomParser.readEncapsulatedImageFrame(dataSet, dataSet.elements.x7fe00010, frameIndex, basicOffsetTable);
  }

  return dicomParser.readEncapsulatedPixelDataFromFragments(dataSet, dataSet.elements.x7fe00010, frameIndex);
}

/***/ }),

/***/ "./imageLoader/wadouri/getPixelData.js":
/*!*********************************************!*\
  !*** ./imageLoader/wadouri/getPixelData.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getEncapsulatedImageFrame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEncapsulatedImageFrame.js */ "./imageLoader/wadouri/getEncapsulatedImageFrame.js");
/* harmony import */ var _getUncompressedImageFrame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getUncompressedImageFrame.js */ "./imageLoader/wadouri/getUncompressedImageFrame.js");



function getPixelData(dataSet) {
  var frameIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var pixelDataElement = dataSet.elements.x7fe00010 || dataSet.elements.x7fe00008;

  if (!pixelDataElement) {
    return null;
  }

  if (pixelDataElement.encapsulatedPixelData) {
    return Object(_getEncapsulatedImageFrame_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataSet, frameIndex);
  }

  return Object(_getUncompressedImageFrame_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dataSet, frameIndex);
}

/* harmony default export */ __webpack_exports__["default"] = (getPixelData);

/***/ }),

/***/ "./imageLoader/wadouri/getUncompressedImageFrame.js":
/*!**********************************************************!*\
  !*** ./imageLoader/wadouri/getUncompressedImageFrame.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unpackBinaryFrame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unpackBinaryFrame.js */ "./imageLoader/wadouri/unpackBinaryFrame.js");

/**
 * Function to deal with extracting an image frame from an encapsulated data set.
 */

function getUncompressedImageFrame(dataSet, frameIndex) {
  var pixelDataElement = dataSet.elements.x7fe00010 || dataSet.elements.x7fe00008;
  var bitsAllocated = dataSet.uint16('x00280100');
  var rows = dataSet.uint16('x00280010');
  var columns = dataSet.uint16('x00280011');
  var samplesPerPixel = dataSet.uint16('x00280002');
  var pixelDataOffset = pixelDataElement.dataOffset;
  var pixelsPerFrame = rows * columns * samplesPerPixel;
  var frameOffset;

  if (bitsAllocated === 8) {
    frameOffset = pixelDataOffset + frameIndex * pixelsPerFrame;

    if (frameOffset >= dataSet.byteArray.length) {
      throw new Error('frame exceeds size of pixelData');
    }

    return new Uint8Array(dataSet.byteArray.buffer, frameOffset, pixelsPerFrame);
  } else if (bitsAllocated === 16) {
    frameOffset = pixelDataOffset + frameIndex * pixelsPerFrame * 2;

    if (frameOffset >= dataSet.byteArray.length) {
      throw new Error('frame exceeds size of pixelData');
    }

    return new Uint8Array(dataSet.byteArray.buffer, frameOffset, pixelsPerFrame * 2);
  } else if (bitsAllocated === 1) {
    frameOffset = pixelDataOffset + frameIndex * pixelsPerFrame * 0.125;

    if (frameOffset >= dataSet.byteArray.length) {
      throw new Error('frame exceeds size of pixelData');
    }

    return Object(_unpackBinaryFrame_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataSet.byteArray, frameOffset, pixelsPerFrame);
  } else if (bitsAllocated === 32) {
    frameOffset = pixelDataOffset + frameIndex * pixelsPerFrame * 4;

    if (frameOffset >= dataSet.byteArray.length) {
      throw new Error('frame exceeds size of pixelData');
    }

    return new Uint8Array(dataSet.byteArray.buffer, frameOffset, pixelsPerFrame * 4);
  }

  throw new Error('unsupported pixel format');
}

/* harmony default export */ __webpack_exports__["default"] = (getUncompressedImageFrame);

/***/ }),

/***/ "./imageLoader/wadouri/index.js":
/*!**************************************!*\
  !*** ./imageLoader/wadouri/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _metaData_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metaData/index.js */ "./imageLoader/wadouri/metaData/index.js");
/* harmony import */ var _dataSetCacheManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataSetCacheManager.js */ "./imageLoader/wadouri/dataSetCacheManager.js");
/* harmony import */ var _fileManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fileManager.js */ "./imageLoader/wadouri/fileManager.js");
/* harmony import */ var _getEncapsulatedImageFrame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getEncapsulatedImageFrame.js */ "./imageLoader/wadouri/getEncapsulatedImageFrame.js");
/* harmony import */ var _getUncompressedImageFrame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getUncompressedImageFrame.js */ "./imageLoader/wadouri/getUncompressedImageFrame.js");
/* harmony import */ var _loadFileRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadFileRequest.js */ "./imageLoader/wadouri/loadFileRequest.js");
/* harmony import */ var _loadImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadImage.js */ "./imageLoader/wadouri/loadImage.js");
/* harmony import */ var _parseImageId_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parseImageId.js */ "./imageLoader/wadouri/parseImageId.js");
/* harmony import */ var _unpackBinaryFrame_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./unpackBinaryFrame.js */ "./imageLoader/wadouri/unpackBinaryFrame.js");
/* harmony import */ var _register_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register.js */ "./imageLoader/wadouri/register.js");










var metaData = {
  getImagePixelModule: _metaData_index_js__WEBPACK_IMPORTED_MODULE_0__["getImagePixelModule"],
  getLUTs: _metaData_index_js__WEBPACK_IMPORTED_MODULE_0__["getLUTs"],
  getModalityLUTOutputPixelRepresentation: _metaData_index_js__WEBPACK_IMPORTED_MODULE_0__["getModalityLUTOutputPixelRepresentation"],
  getNumberValues: _metaData_index_js__WEBPACK_IMPORTED_MODULE_0__["getNumberValues"],
  metaDataProvider: _metaData_index_js__WEBPACK_IMPORTED_MODULE_0__["metaDataProvider"]
};
/* harmony default export */ __webpack_exports__["default"] = ({
  metaData: metaData,
  dataSetCacheManager: _dataSetCacheManager_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  fileManager: _fileManager_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getEncapsulatedImageFrame: _getEncapsulatedImageFrame_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  getUncompressedImageFrame: _getUncompressedImageFrame_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  loadFileRequest: _loadFileRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  loadImageFromPromise: _loadImage_js__WEBPACK_IMPORTED_MODULE_6__["loadImageFromPromise"],
  getLoaderForScheme: _loadImage_js__WEBPACK_IMPORTED_MODULE_6__["getLoaderForScheme"],
  loadImage: _loadImage_js__WEBPACK_IMPORTED_MODULE_6__["loadImage"],
  parseImageId: _parseImageId_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  unpackBinaryFrame: _unpackBinaryFrame_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  register: _register_js__WEBPACK_IMPORTED_MODULE_9__["default"]
});

/***/ }),

/***/ "./imageLoader/wadouri/loadFileRequest.js":
/*!************************************************!*\
  !*** ./imageLoader/wadouri/loadFileRequest.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parseImageId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseImageId.js */ "./imageLoader/wadouri/parseImageId.js");
/* harmony import */ var _fileManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fileManager.js */ "./imageLoader/wadouri/fileManager.js");



function loadFileRequest(uri) {
  var parsedImageId = Object(_parseImageId_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uri);
  var fileIndex = parseInt(parsedImageId.url, 10);
  var file = _fileManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].get(fileIndex);
  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader();

    fileReader.onload = function (e) {
      var dicomPart10AsArrayBuffer = e.target.result;
      resolve(dicomPart10AsArrayBuffer);
    };

    fileReader.onerror = reject;
    fileReader.readAsArrayBuffer(file);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (loadFileRequest);

/***/ }),

/***/ "./imageLoader/wadouri/loadImage.js":
/*!******************************************!*\
  !*** ./imageLoader/wadouri/loadImage.js ***!
  \******************************************/
/*! exports provided: loadImageFromPromise, getLoaderForScheme, loadImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImageFromPromise", function() { return loadImageFromPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoaderForScheme", function() { return getLoaderForScheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony import */ var _createImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createImage.js */ "./imageLoader/createImage.js");
/* harmony import */ var _parseImageId_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseImageId.js */ "./imageLoader/wadouri/parseImageId.js");
/* harmony import */ var _dataSetCacheManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataSetCacheManager.js */ "./imageLoader/wadouri/dataSetCacheManager.js");
/* harmony import */ var _loadFileRequest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadFileRequest.js */ "./imageLoader/wadouri/loadFileRequest.js");
/* harmony import */ var _getPixelData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getPixelData.js */ "./imageLoader/wadouri/getPixelData.js");
/* harmony import */ var _internal_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/index.js */ "./imageLoader/internal/index.js");





 // add a decache callback function to clear out our dataSetCacheManager

function addDecache(imageLoadObject, imageId) {
  imageLoadObject.decache = function () {
    // console.log('decache');
    var parsedImageId = Object(_parseImageId_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imageId);
    _dataSetCacheManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].unload(parsedImageId.url);
  };
}

function loadImageFromPromise(dataSetPromise, imageId) {
  var frame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var sharedCacheKey = arguments.length > 3 ? arguments[3] : undefined;
  var options = arguments.length > 4 ? arguments[4] : undefined;
  var callbacks = arguments.length > 5 ? arguments[5] : undefined;
  var start = new Date().getTime();
  var imageLoadObject = {
    cancelFn: undefined
  };
  imageLoadObject.promise = new Promise(function (resolve, reject) {
    dataSetPromise.then(function (dataSet
    /* , xhr*/
    ) {
      var pixelData = Object(_getPixelData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dataSet, frame);
      var transferSyntax = dataSet.string('x00020010');
      var loadEnd = new Date().getTime();
      var imagePromise = Object(_createImage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(imageId, pixelData, transferSyntax, options);
      addDecache(imageLoadObject, imageId);
      imagePromise.then(function (image) {
        image.data = dataSet;
        image.sharedCacheKey = sharedCacheKey;
        var end = new Date().getTime();
        image.loadTimeInMS = loadEnd - start;
        image.totalTimeInMS = end - start;

        if (callbacks !== undefined && callbacks.imageDoneCallback !== undefined) {
          callbacks.imageDoneCallback(image);
        }

        resolve(image);
      }, function (error) {
        // Reject the error, and the dataSet
        reject({
          error: error,
          dataSet: dataSet
        });
      });
    }, function (error) {
      // Reject the error
      reject({
        error: error
      });
    });
  });
  return imageLoadObject;
}

function loadImageFromDataSet(dataSet, imageId) {
  var frame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var sharedCacheKey = arguments.length > 3 ? arguments[3] : undefined;
  var options = arguments.length > 4 ? arguments[4] : undefined;
  var start = new Date().getTime();
  var promise = new Promise(function (resolve, reject) {
    var loadEnd = new Date().getTime();
    var imagePromise;

    try {
      var pixelData = Object(_getPixelData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dataSet, frame);
      var transferSyntax = dataSet.string('x00020010');
      imagePromise = Object(_createImage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(imageId, pixelData, transferSyntax, options);
    } catch (error) {
      // Reject the error, and the dataSet
      reject({
        error: error,
        dataSet: dataSet
      });
      return;
    }

    imagePromise.then(function (image) {
      image.data = dataSet;
      image.sharedCacheKey = sharedCacheKey;
      var end = new Date().getTime();
      image.loadTimeInMS = loadEnd - start;
      image.totalTimeInMS = end - start;
      resolve(image);
    }, reject);
  });
  return {
    promise: promise,
    cancelFn: undefined
  };
}

function getLoaderForScheme(scheme) {
  if (scheme === 'dicomweb' || scheme === 'wadouri') {
    return _internal_index_js__WEBPACK_IMPORTED_MODULE_5__["xhrRequest"];
  } else if (scheme === 'dicomfile') {
    return _loadFileRequest_js__WEBPACK_IMPORTED_MODULE_3__["default"];
  }
}

function loadImage(imageId) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parsedImageId = Object(_parseImageId_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imageId);
  options = Object.assign({}, options);
  var loader = options.loader;

  if (loader === undefined) {
    loader = getLoaderForScheme(parsedImageId.scheme);
  } else {
    delete options.loader;
  } // if the dataset for this url is already loaded, use it


  if (_dataSetCacheManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].isLoaded(parsedImageId.url)) {
    var dataSet = _dataSetCacheManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].get(parsedImageId.url, loader, imageId);
    return loadImageFromDataSet(dataSet, imageId, parsedImageId.frame, parsedImageId.url, options);
  } // load the dataSet via the dataSetCacheManager


  var dataSetPromise = _dataSetCacheManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].load(parsedImageId.url, loader, imageId);
  return loadImageFromPromise(dataSetPromise, imageId, parsedImageId.frame, parsedImageId.url, options);
}



/***/ }),

/***/ "./imageLoader/wadouri/metaData/getImagePixelModule.js":
/*!*************************************************************!*\
  !*** ./imageLoader/wadouri/metaData/getImagePixelModule.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getLutDescriptor(dataSet, tag) {
  if (!dataSet.elements[tag] || dataSet.elements[tag].length !== 6) {
    return;
  }

  return [dataSet.uint16(tag, 0), dataSet.uint16(tag, 1), dataSet.uint16(tag, 2)];
}

function getLutData(lutDataSet, tag, lutDescriptor) {
  var lut = [];
  var lutData = lutDataSet.elements[tag];

  for (var i = 0; i < lutDescriptor[0]; i++) {
    // Output range is always unsigned
    if (lutDescriptor[2] === 16) {
      lut[i] = lutDataSet.uint16(tag, i);
    } else {
      lut[i] = lutDataSet.byteArray[i + lutData.dataOffset];
    }
  }

  return lut;
}

function populatePaletteColorLut(dataSet, imagePixelModule) {
  imagePixelModule.redPaletteColorLookupTableDescriptor = getLutDescriptor(dataSet, 'x00281101');
  imagePixelModule.greenPaletteColorLookupTableDescriptor = getLutDescriptor(dataSet, 'x00281102');
  imagePixelModule.bluePaletteColorLookupTableDescriptor = getLutDescriptor(dataSet, 'x00281103'); // The first Palette Color Lookup Table Descriptor value is the number of entries in the lookup table.
  // When the number of table entries is equal to 2ˆ16 then this value shall be 0.
  // See http://dicom.nema.org/MEDICAL/DICOM/current/output/chtml/part03/sect_C.7.6.3.html#sect_C.7.6.3.1.5

  if (imagePixelModule.redPaletteColorLookupTableDescriptor[0] === 0) {
    imagePixelModule.redPaletteColorLookupTableDescriptor[0] = 65536;
    imagePixelModule.greenPaletteColorLookupTableDescriptor[0] = 65536;
    imagePixelModule.bluePaletteColorLookupTableDescriptor[0] = 65536;
  } // The third Palette Color Lookup Table Descriptor value specifies the number of bits for each entry in the Lookup Table Data.
  // It shall take the value of 8 or 16.
  // The LUT Data shall be stored in a format equivalent to 8 bits allocated when the number of bits for each entry is 8, and 16 bits allocated when the number of bits for each entry is 16, where in both cases the high bit is equal to bits allocated-1.
  // The third value shall be identical for each of the Red, Green and Blue Palette Color Lookup Table Descriptors.
  //
  // Note: Some implementations have encoded 8 bit entries with 16 bits allocated, padding the high bits;
  // this can be detected by comparing the number of entries specified in the LUT Descriptor with the actual value length of the LUT Data entry.
  // The value length in bytes should equal the number of entries if bits allocated is 8, and be twice as long if bits allocated is 16.


  var numLutEntries = imagePixelModule.redPaletteColorLookupTableDescriptor[0];
  var lutData = dataSet.elements.x00281201;
  var lutBitsAllocated = lutData.length === numLutEntries ? 8 : 16; // If the descriptors do not appear to have the correct values, correct them

  if (imagePixelModule.redPaletteColorLookupTableDescriptor[2] !== lutBitsAllocated) {
    imagePixelModule.redPaletteColorLookupTableDescriptor[2] = lutBitsAllocated;
    imagePixelModule.greenPaletteColorLookupTableDescriptor[2] = lutBitsAllocated;
    imagePixelModule.bluePaletteColorLookupTableDescriptor[2] = lutBitsAllocated;
  }

  imagePixelModule.redPaletteColorLookupTableData = getLutData(dataSet, 'x00281201', imagePixelModule.redPaletteColorLookupTableDescriptor);
  imagePixelModule.greenPaletteColorLookupTableData = getLutData(dataSet, 'x00281202', imagePixelModule.greenPaletteColorLookupTableDescriptor);
  imagePixelModule.bluePaletteColorLookupTableData = getLutData(dataSet, 'x00281203', imagePixelModule.bluePaletteColorLookupTableDescriptor);
}

function populateSmallestLargestPixelValues(dataSet, imagePixelModule) {
  var pixelRepresentation = dataSet.uint16('x00280103');

  if (pixelRepresentation === 0) {
    imagePixelModule.smallestPixelValue = dataSet.uint16('x00280106');
    imagePixelModule.largestPixelValue = dataSet.uint16('x00280107');
  } else {
    imagePixelModule.smallestPixelValue = dataSet.int16('x00280106');
    imagePixelModule.largestPixelValue = dataSet.int16('x00280107');
  }
}

function getImagePixelModule(dataSet) {
  var imagePixelModule = {
    samplesPerPixel: dataSet.uint16('x00280002'),
    photometricInterpretation: dataSet.string('x00280004'),
    rows: dataSet.uint16('x00280010'),
    columns: dataSet.uint16('x00280011'),
    bitsAllocated: dataSet.uint16('x00280100'),
    bitsStored: dataSet.uint16('x00280101'),
    highBit: dataSet.uint16('x00280102'),
    pixelRepresentation: dataSet.uint16('x00280103'),
    planarConfiguration: dataSet.uint16('x00280006'),
    pixelAspectRatio: dataSet.string('x00280034')
  };
  populateSmallestLargestPixelValues(dataSet, imagePixelModule);

  if (imagePixelModule.photometricInterpretation === 'PALETTE COLOR' && dataSet.elements.x00281101) {
    populatePaletteColorLut(dataSet, imagePixelModule);
  }

  return imagePixelModule;
}

/* harmony default export */ __webpack_exports__["default"] = (getImagePixelModule);

/***/ }),

/***/ "./imageLoader/wadouri/metaData/getLUTs.js":
/*!*************************************************!*\
  !*** ./imageLoader/wadouri/metaData/getLUTs.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getLUT(pixelRepresentation, lutDataSet) {
  var numLUTEntries = lutDataSet.uint16('x00283002', 0);

  if (numLUTEntries === 0) {
    numLUTEntries = 65535;
  }

  var firstValueMapped = 0;

  if (pixelRepresentation === 0) {
    firstValueMapped = lutDataSet.uint16('x00283002', 1);
  } else {
    firstValueMapped = lutDataSet.int16('x00283002', 1);
  }

  var numBitsPerEntry = lutDataSet.uint16('x00283002', 2); // console.log('LUT(', numLUTEntries, ',', firstValueMapped, ',', numBitsPerEntry, ')');

  var lut = {
    id: '1',
    firstValueMapped: firstValueMapped,
    numBitsPerEntry: numBitsPerEntry,
    lut: []
  }; // console.log("minValue=", minValue, "; maxValue=", maxValue);

  for (var i = 0; i < numLUTEntries; i++) {
    if (pixelRepresentation === 0) {
      lut.lut[i] = lutDataSet.uint16('x00283006', i);
    } else {
      lut.lut[i] = lutDataSet.int16('x00283006', i);
    }
  }

  return lut;
}

function getLUTs(pixelRepresentation, lutSequence) {
  if (!lutSequence || !lutSequence.items.length) {
    return;
  }

  var luts = [];

  for (var i = 0; i < lutSequence.items.length; i++) {
    var lutDataSet = lutSequence.items[i].dataSet;
    var lut = getLUT(pixelRepresentation, lutDataSet);

    if (lut) {
      luts.push(lut);
    }
  }

  return luts;
}

/* harmony default export */ __webpack_exports__["default"] = (getLUTs);

/***/ }),

/***/ "./imageLoader/wadouri/metaData/getModalityLUTOutputPixelRepresentation.js":
/*!*********************************************************************************!*\
  !*** ./imageLoader/wadouri/metaData/getModalityLUTOutputPixelRepresentation.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint no-bitwise: 0 */
function getMinStoredPixelValue(dataSet) {
  var pixelRepresentation = dataSet.uint16('x00280103');
  var bitsStored = dataSet.uint16('x00280101');

  if (pixelRepresentation === 0) {
    return 0;
  }

  return -1 << bitsStored - 1;
} // 0 = unsigned / US, 1 = signed / SS


function getModalityLUTOutputPixelRepresentation(dataSet) {
  // CT SOP Classes are always signed
  var sopClassUID = dataSet.string('x00080016');

  if (sopClassUID === '1.2.840.10008.5.1.4.1.1.2' || sopClassUID === '1.2.840.10008.5.1.4.1.1.2.1') {
    return 1;
  } // if rescale intercept and rescale slope are present, pass the minimum stored
  // pixel value through them to see if we get a signed output range


  var rescaleIntercept = dataSet.floatString('x00281052');
  var rescaleSlope = dataSet.floatString('x00281053');

  if (rescaleIntercept !== undefined && rescaleSlope !== undefined) {
    var minStoredPixelValue = getMinStoredPixelValue(dataSet); //

    var minModalityLutValue = minStoredPixelValue * rescaleSlope + rescaleIntercept;

    if (minModalityLutValue < 0) {
      return 1;
    }

    return 0;
  } // Output of non linear modality lut is always unsigned


  if (dataSet.elements.x00283000 && dataSet.elements.x00283000.length > 0) {
    return 0;
  } // If no modality lut transform, output is same as pixel representation


  return dataSet.uint16('x00280103');
}

/* harmony default export */ __webpack_exports__["default"] = (getModalityLUTOutputPixelRepresentation);

/***/ }),

/***/ "./imageLoader/wadouri/metaData/getNumberValues.js":
/*!*********************************************************!*\
  !*** ./imageLoader/wadouri/metaData/getNumberValues.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getNumberValues(dataSet, tag, minimumLength) {
  var values = [];
  var valueAsString = dataSet.string(tag);

  if (!valueAsString) {
    return;
  }

  var split = valueAsString.split('\\');

  if (minimumLength && split.length < minimumLength) {
    return;
  }

  for (var i = 0; i < split.length; i++) {
    values.push(parseFloat(split[i]));
  }

  return values;
}

/* harmony default export */ __webpack_exports__["default"] = (getNumberValues);

/***/ }),

/***/ "./imageLoader/wadouri/metaData/index.js":
/*!***********************************************!*\
  !*** ./imageLoader/wadouri/metaData/index.js ***!
  \***********************************************/
/*! exports provided: getImagePixelModule, getLUTs, getModalityLUTOutputPixelRepresentation, getNumberValues, metaDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getImagePixelModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getImagePixelModule.js */ "./imageLoader/wadouri/metaData/getImagePixelModule.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImagePixelModule", function() { return _getImagePixelModule_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _getLUTs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLUTs.js */ "./imageLoader/wadouri/metaData/getLUTs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLUTs", function() { return _getLUTs_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _getModalityLUTOutputPixelRepresentation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getModalityLUTOutputPixelRepresentation.js */ "./imageLoader/wadouri/metaData/getModalityLUTOutputPixelRepresentation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModalityLUTOutputPixelRepresentation", function() { return _getModalityLUTOutputPixelRepresentation_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _getNumberValues_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNumberValues.js */ "./imageLoader/wadouri/metaData/getNumberValues.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberValues", function() { return _getNumberValues_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _metaDataProvider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metaDataProvider.js */ "./imageLoader/wadouri/metaData/metaDataProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metaDataProvider", function() { return _metaDataProvider_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./imageLoader/wadouri/metaData/metaDataProvider.js":
/*!**********************************************************!*\
  !*** ./imageLoader/wadouri/metaData/metaDataProvider.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _externalModules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../externalModules.js */ "./externalModules.js");
/* harmony import */ var _getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNumberValues.js */ "./imageLoader/wadouri/metaData/getNumberValues.js");
/* harmony import */ var _parseImageId_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parseImageId.js */ "./imageLoader/wadouri/parseImageId.js");
/* harmony import */ var _dataSetCacheManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataSetCacheManager.js */ "./imageLoader/wadouri/dataSetCacheManager.js");
/* harmony import */ var _getImagePixelModule_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getImagePixelModule.js */ "./imageLoader/wadouri/metaData/getImagePixelModule.js");
/* harmony import */ var _getLUTs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getLUTs.js */ "./imageLoader/wadouri/metaData/getLUTs.js");
/* harmony import */ var _getModalityLUTOutputPixelRepresentation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getModalityLUTOutputPixelRepresentation.js */ "./imageLoader/wadouri/metaData/getModalityLUTOutputPixelRepresentation.js");








function metaDataProvider(type, imageId) {
  var dicomParser = _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].dicomParser;
  var parsedImageId = Object(_parseImageId_js__WEBPACK_IMPORTED_MODULE_2__["default"])(imageId);
  var dataSet = _dataSetCacheManager_js__WEBPACK_IMPORTED_MODULE_3__["default"].get(parsedImageId.url);

  if (!dataSet) {
    return;
  }

  if (type === 'generalSeriesModule') {
    return {
      modality: dataSet.string('x00080060'),
      seriesInstanceUID: dataSet.string('x0020000e'),
      seriesNumber: dataSet.intString('x00200011'),
      studyInstanceUID: dataSet.string('x0020000d'),
      seriesDate: dicomParser.parseDA(dataSet.string('x00080021')),
      seriesTime: dicomParser.parseTM(dataSet.string('x00080031') || '')
    };
  }

  if (type === 'patientStudyModule') {
    return {
      patientAge: dataSet.intString('x00101010'),
      patientSize: dataSet.floatString('x00101020'),
      patientWeight: dataSet.floatString('x00101030')
    };
  }

  if (type === 'imagePlaneModule') {
    var imageOrientationPatient = Object(_getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dataSet, 'x00200037', 6);
    var imagePositionPatient = Object(_getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dataSet, 'x00200032', 3);
    var pixelSpacing = Object(_getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dataSet, 'x00280030', 2);
    var columnPixelSpacing = null;
    var rowPixelSpacing = null;

    if (pixelSpacing) {
      rowPixelSpacing = pixelSpacing[0];
      columnPixelSpacing = pixelSpacing[1];
    }

    var rowCosines = null;
    var columnCosines = null;

    if (imageOrientationPatient) {
      rowCosines = [parseFloat(imageOrientationPatient[0]), parseFloat(imageOrientationPatient[1]), parseFloat(imageOrientationPatient[2])];
      columnCosines = [parseFloat(imageOrientationPatient[3]), parseFloat(imageOrientationPatient[4]), parseFloat(imageOrientationPatient[5])];
    }

    return {
      frameOfReferenceUID: dataSet.string('x00200052'),
      rows: dataSet.uint16('x00280010'),
      columns: dataSet.uint16('x00280011'),
      imageOrientationPatient: imageOrientationPatient,
      rowCosines: rowCosines,
      columnCosines: columnCosines,
      imagePositionPatient: imagePositionPatient,
      sliceThickness: dataSet.floatString('x00180050'),
      sliceLocation: dataSet.floatString('x00201041'),
      pixelSpacing: pixelSpacing,
      rowPixelSpacing: rowPixelSpacing,
      columnPixelSpacing: columnPixelSpacing
    };
  }

  if (type === 'imagePixelModule') {
    return Object(_getImagePixelModule_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dataSet);
  }

  if (type === 'modalityLutModule') {
    return {
      rescaleIntercept: dataSet.floatString('x00281052'),
      rescaleSlope: dataSet.floatString('x00281053'),
      rescaleType: dataSet.string('x00281054'),
      modalityLUTSequence: Object(_getLUTs_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dataSet.uint16('x00280103'), dataSet.elements.x00283000)
    };
  }

  if (type === 'voiLutModule') {
    var modalityLUTOutputPixelRepresentation = Object(_getModalityLUTOutputPixelRepresentation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dataSet);
    return {
      windowCenter: Object(_getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dataSet, 'x00281050', 1),
      windowWidth: Object(_getNumberValues_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dataSet, 'x00281051', 1),
      voiLUTSequence: Object(_getLUTs_js__WEBPACK_IMPORTED_MODULE_5__["default"])(modalityLUTOutputPixelRepresentation, dataSet.elements.x00283010)
    };
  }

  if (type === 'sopCommonModule') {
    return {
      sopClassUID: dataSet.string('x00080016'),
      sopInstanceUID: dataSet.string('x00080018')
    };
  }

  if (type === 'petIsotopeModule') {
    var radiopharmaceuticalInfo = dataSet.elements.x00540016;

    if (radiopharmaceuticalInfo === undefined) {
      return;
    }

    var firstRadiopharmaceuticalInfoDataSet = radiopharmaceuticalInfo.items[0].dataSet;
    return {
      radiopharmaceuticalInfo: {
        radiopharmaceuticalStartTime: dicomParser.parseTM(firstRadiopharmaceuticalInfoDataSet.string('x00181072') || ''),
        radionuclideTotalDose: firstRadiopharmaceuticalInfoDataSet.floatString('x00181074'),
        radionuclideHalfLife: firstRadiopharmaceuticalInfoDataSet.floatString('x00181075')
      }
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (metaDataProvider);

/***/ }),

/***/ "./imageLoader/wadouri/parseImageId.js":
/*!*********************************************!*\
  !*** ./imageLoader/wadouri/parseImageId.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function parseImageId(imageId) {
  // build a url by parsing out the url scheme and frame index from the imageId
  var firstColonIndex = imageId.indexOf(':');
  var url = imageId.substring(firstColonIndex + 1);
  var frameIndex = url.indexOf('frame=');
  var frame;

  if (frameIndex !== -1) {
    var frameStr = url.substr(frameIndex + 6);
    frame = parseInt(frameStr, 10);
    url = url.substr(0, frameIndex - 1);
  }

  return {
    scheme: imageId.substr(0, firstColonIndex),
    url: url,
    frame: frame
  };
}

/* harmony default export */ __webpack_exports__["default"] = (parseImageId);

/***/ }),

/***/ "./imageLoader/wadouri/register.js":
/*!*****************************************!*\
  !*** ./imageLoader/wadouri/register.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImage.js */ "./imageLoader/wadouri/loadImage.js");
/* harmony import */ var _metaData_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metaData/index.js */ "./imageLoader/wadouri/metaData/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (cornerstone) {
  // register dicomweb and wadouri image loader prefixes
  cornerstone.registerImageLoader('dicomweb', _loadImage_js__WEBPACK_IMPORTED_MODULE_0__["loadImage"]);
  cornerstone.registerImageLoader('wadouri', _loadImage_js__WEBPACK_IMPORTED_MODULE_0__["loadImage"]);
  cornerstone.registerImageLoader('dicomfile', _loadImage_js__WEBPACK_IMPORTED_MODULE_0__["loadImage"]); // add wadouri metadata provider

  cornerstone.metaData.addProvider(_metaData_index_js__WEBPACK_IMPORTED_MODULE_1__["metaDataProvider"]);
});

/***/ }),

/***/ "./imageLoader/wadouri/unpackBinaryFrame.js":
/*!**************************************************!*\
  !*** ./imageLoader/wadouri/unpackBinaryFrame.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint no-bitwise: 0 */
function isBitSet(byte, bitPos) {
  return byte & 1 << bitPos;
}
/**
 * Function to deal with unpacking a binary frame
 */


function unpackBinaryFrame(byteArray, frameOffset, pixelsPerFrame) {
  // Create a new pixel array given the image size
  var pixelData = new Uint8Array(pixelsPerFrame);

  for (var i = 0; i < pixelsPerFrame; i++) {
    // Compute byte position
    var bytePos = Math.floor(i / 8); // Get the current byte

    var byte = byteArray[bytePos + frameOffset]; // Bit position (0-7) within byte

    var bitPos = i % 8; // Check whether bit at bitpos is set

    pixelData[i] = isBitSet(byte, bitPos) ? 1 : 0;
  }

  return pixelData;
}

/* harmony default export */ __webpack_exports__["default"] = (unpackBinaryFrame);

/***/ }),

/***/ "./imageLoader/webWorkerManager.js":
/*!*****************************************!*\
  !*** ./imageLoader/webWorkerManager.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_options_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/options.js */ "./imageLoader/internal/options.js");
 // the taskId to assign to the next task added via addTask()

var nextTaskId = 0; // array of queued tasks sorted with highest priority task first

var tasks = []; // array of web workers to dispatch decode tasks to

var webWorkers = []; // The options for CornerstoneWADOImageLoader

var options = Object(_internal_options_js__WEBPACK_IMPORTED_MODULE_0__["getOptions"])();
var defaultConfig = {
  maxWebWorkers: navigator.hardwareConcurrency || 1,
  startWebWorkersOnDemand: true,
  webWorkerPath: 'assets/cornerstoneWADOImageLoaderWebWorker.self-58f3ac23c776411591a5e070923e9c28dd12897d0ddbee4a463d90a644aae92b.js?body=1',
  webWorkerTaskPaths: [],
  taskConfiguration: {
    decodeTask: {
      loadCodecsOnStartup: true,
      initializeCodecsOnStartup: false,
      codecsPath: 'cornerstoneWADOImageLoaderWebWorker.self-58f3ac23c776411591a5e070923e9c28dd12897d0ddbee4a463d90a644aae92b.js?body=1',
      usePDFJS: false,
      strict: options.strict
    }
  }
};
var config;
var statistics = {
  maxWebWorkers: 0,
  numWebWorkers: 0,
  numTasksQueued: 0,
  numTasksExecuting: 0,
  numTasksCompleted: 0,
  totalTaskTimeInMS: 0,
  totalTimeDelayedInMS: 0
};
/**
 * Function to start a task on a web worker
 */

function startTaskOnWebWorker() {
  // return immediately if no decode tasks to do
  if (!tasks.length) {
    return;
  } // look for a web worker that is ready


  for (var i = 0; i < webWorkers.length; i++) {
    if (webWorkers[i].status === 'ready') {
      // mark it as busy so tasks are not assigned to it
      webWorkers[i].status = 'busy'; // get the highest priority task

      var task = tasks.shift();
      task.start = new Date().getTime(); // update stats with how long this task was delayed (waiting in queue)

      var end = new Date().getTime();
      statistics.totalTimeDelayedInMS += end - task.added; // assign this task to this web worker and send the web worker
      // a message to execute it

      webWorkers[i].task = task;
      webWorkers[i].worker.postMessage({
        taskType: task.taskType,
        workerIndex: i,
        data: task.data
      }, task.transferList);
      statistics.numTasksExecuting++;
      return;
    }
  } // if no available web workers and we haven't started max web workers, start a new one


  if (webWorkers.length < config.maxWebWorkers) {
    spawnWebWorker();
  }
}
/**
 * Function to handle a message from a web worker
 * @param msg
 */


function handleMessageFromWorker(msg) {
  // console.log('handleMessageFromWorker', msg.data);
  if (msg.data.taskType === 'initialize') {
    webWorkers[msg.data.workerIndex].status = 'ready';
    startTaskOnWebWorker();
  } else {
    var start = webWorkers[msg.data.workerIndex].task.start;
    webWorkers[msg.data.workerIndex].task.deferred.resolve(msg.data.result);
    webWorkers[msg.data.workerIndex].task = undefined;
    statistics.numTasksExecuting--;
    webWorkers[msg.data.workerIndex].status = 'ready';
    statistics.numTasksCompleted++;
    var end = new Date().getTime();
    statistics.totalTaskTimeInMS += end - start;
    startTaskOnWebWorker();
  }
}
/**
 * Spawns a new web worker
 */


function spawnWebWorker() {
  // prevent exceeding maxWebWorkers
  if (webWorkers.length >= config.maxWebWorkers) {
    return;
  } // spawn the webworker


  var worker = new Worker(config.webWorkerPath);
  webWorkers.push({
    worker: worker,
    status: 'initializing'
  });
  worker.addEventListener('message', handleMessageFromWorker);
  worker.postMessage({
    taskType: 'initialize',
    workerIndex: webWorkers.length - 1,
    config: config
  });
}
/**
 * Initialization function for the web worker manager - spawns web workers
 * @param configObject
 */


function initialize(configObject) {
  configObject = configObject || defaultConfig; // prevent being initialized more than once

  if (config) {
    throw new Error('WebWorkerManager already initialized');
  }

  config = configObject;
  config.maxWebWorkers = config.maxWebWorkers || navigator.hardwareConcurrency || 1; // Spawn new web workers

  if (!config.startWebWorkersOnDemand) {
    for (var i = 0; i < config.maxWebWorkers; i++) {
      spawnWebWorker();
    }
  }
}
/**
 * dynamically loads a web worker task
 * @param sourcePath
 * @param taskConfig
 */


function loadWebWorkerTask(sourcePath, taskConfig) {
  // add it to the list of web worker tasks paths so on demand web workers
  // load this properly
  config.webWorkerTaskPaths.push(sourcePath); // if a task specific configuration is provided, merge it into the config

  if (taskConfig) {
    config.taskConfiguration = Object.assign(config.taskConfiguration, taskConfig);
  } // tell each spawned web worker to load this task


  for (var i = 0; i < webWorkers.length; i++) {
    webWorkers[i].worker.postMessage({
      taskType: 'loadWebWorkerTask',
      workerIndex: webWorkers.length - 1,
      sourcePath: sourcePath,
      config: config
    });
  }
}
/**
 * Function to add a decode task to be performed
 *
 * @param taskType - the taskType for this task
 * @param data - data specific to the task
 * @param priority - optional priority of the task (defaults to 0), > 0 is higher, < 0 is lower
 * @param transferList - optional array of data to transfer to web worker
 * @returns {*}
 */


function addTask(taskType, data) {
  var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var transferList = arguments.length > 3 ? arguments[3] : undefined;

  if (!config) {
    initialize();
  }

  var deferred = {};
  var promise = new Promise(function (resolve, reject) {
    deferred = {
      resolve: resolve,
      reject: reject
    };
  }); // find the right spot to insert this decode task (based on priority)

  var i;

  for (i = 0; i < tasks.length; i++) {
    if (tasks[i].priority < priority) {
      break;
    }
  }

  var taskId = nextTaskId++; // insert the decode task at position i

  tasks.splice(i, 0, {
    taskId: taskId,
    taskType: taskType,
    status: 'ready',
    added: new Date().getTime(),
    data: data,
    deferred: deferred,
    priority: priority,
    transferList: transferList
  }); // try to start a task on the web worker since we just added a new task and a web worker may be available

  startTaskOnWebWorker();
  return {
    taskId: taskId,
    promise: promise
  };
}
/**
 * Changes the priority of a queued task
 * @param taskId - the taskId to change the priority of
 * @param priority - priority of the task (defaults to 0), > 0 is higher, < 0 is lower
 * @returns boolean - true on success, false if taskId not found
 */


function setTaskPriority(taskId) {
  var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  // search for this taskId
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].taskId === taskId) {
      // taskId found, remove it
      var task = tasks.splice(i, 1)[0]; // set its priority

      task.priority = priority; // find the right spot to insert this decode task (based on priority)

      for (i = 0; i < tasks.length; i++) {
        if (tasks[i].priority < priority) {
          break;
        }
      } // insert the decode task at position i


      tasks.splice(i, 0, task);
      return true;
    }
  }

  return false;
}
/**
 * Cancels a queued task and rejects
 * @param taskId - the taskId to cancel
 * @param reason - optional reason the task was rejected
 * @returns boolean - true on success, false if taskId not found
 */


function cancelTask(taskId, reason) {
  // search for this taskId
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].taskId === taskId) {
      // taskId found, remove it
      var task = tasks.splice(i, 1);
      task.deferred.reject(reason);
      return true;
    }
  }

  return false;
}
/**
 * Function to return the statistics on running web workers
 * @returns object containing statistics
 */


function getStatistics() {
  statistics.maxWebWorkers = config.maxWebWorkers;
  statistics.numWebWorkers = webWorkers.length;
  statistics.numTasksQueued = tasks.length;
  return statistics;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  initialize: initialize,
  loadWebWorkerTask: loadWebWorkerTask,
  addTask: addTask,
  getStatistics: getStatistics,
  setTaskPriority: setTaskPriority,
  cancelTask: cancelTask
});

/***/ }),

/***/ "./shared/calculateMinMax.js":
/*!***********************************!*\
  !*** ./shared/calculateMinMax.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calculateMinMax; });
/* harmony import */ var _getMinMax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMinMax.js */ "./shared/getMinMax.js");

/**
 * Check the minimum and maximum values in the imageFrame pixel data
 * match with the provided smallestPixelValue and largestPixelValue metaData.
 *
 * If 'strict' is true, log to the console a warning if these values do not match.
 * Otherwise, correct them automatically.
 *
 * @param {Object} imageFrame
 * @param {Boolean} strict If 'strict' is true, log to the console a warning if these values do not match.
 * Otherwise, correct them automatically.Default is true.
 */

function calculateMinMax(imageFrame) {
  var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var minMax = Object(_getMinMax_js__WEBPACK_IMPORTED_MODULE_0__["default"])(imageFrame.pixelData);
  var mustAssign = !(isNumber(imageFrame.smallestPixelValue) && isNumber(imageFrame.largestPixelValue));

  if (strict === true && !mustAssign) {
    if (imageFrame.smallestPixelValue !== minMax.min) {
      console.warn('Image smallestPixelValue tag is incorrect. Rendering performance will suffer considerably.');
    }

    if (imageFrame.largestPixelValue !== minMax.max) {
      console.warn('Image largestPixelValue tag is incorrect. Rendering performance will suffer considerably.');
    }
  } else {
    imageFrame.smallestPixelValue = minMax.min;
    imageFrame.largestPixelValue = minMax.max;
  }
}

function isNumber(numValue) {
  return typeof numValue === 'number';
}

/***/ }),

/***/ "./shared/decodeImageFrame.js":
/*!************************************!*\
  !*** ./shared/decodeImageFrame.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decoders_decodeLittleEndian_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoders/decodeLittleEndian.js */ "./shared/decoders/decodeLittleEndian.js");
/* harmony import */ var _decoders_decodeBigEndian_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decoders/decodeBigEndian.js */ "./shared/decoders/decodeBigEndian.js");
/* harmony import */ var _decoders_decodeRLE_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decoders/decodeRLE.js */ "./shared/decoders/decodeRLE.js");
/* harmony import */ var _decoders_decodeJPEGBaseline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decoders/decodeJPEGBaseline.js */ "./shared/decoders/decodeJPEGBaseline.js");
/* harmony import */ var _decoders_decodeJPEGLossless_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decoders/decodeJPEGLossless.js */ "./shared/decoders/decodeJPEGLossless.js");
/* harmony import */ var _decoders_decodeJPEGLS_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decoders/decodeJPEGLS.js */ "./shared/decoders/decodeJPEGLS.js");
/* harmony import */ var _decoders_decodeJPEG2000_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decoders/decodeJPEG2000.js */ "./shared/decoders/decodeJPEG2000.js");








function decodeImageFrame(imageFrame, transferSyntax, pixelData, decodeConfig, options) {
  var start = new Date().getTime();

  if (transferSyntax === '1.2.840.10008.1.2') {
    // Implicit VR Little Endian
    imageFrame = Object(_decoders_decodeLittleEndian_js__WEBPACK_IMPORTED_MODULE_0__["default"])(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.1') {
    // Explicit VR Little Endian
    imageFrame = Object(_decoders_decodeLittleEndian_js__WEBPACK_IMPORTED_MODULE_0__["default"])(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.2') {
    // Explicit VR Big Endian (retired)
    imageFrame = Object(_decoders_decodeBigEndian_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.1.99') {
    // Deflate transfer syntax (deflated by dicomParser)
    imageFrame = Object(_decoders_decodeLittleEndian_js__WEBPACK_IMPORTED_MODULE_0__["default"])(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.5') {
    // RLE Lossless
    imageFrame = Object(_decoders_decodeRLE_js__WEBPACK_IMPORTED_MODULE_2__["default"])(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.50') {
    // JPEG Baseline lossy process 1 (8 bit)
    imageFrame = Object(_decoders_decodeJPEGBaseline_js__WEBPACK_IMPORTED_MODULE_3__["default"])(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.51') {
    // JPEG Baseline lossy process 2 & 4 (12 bit)
    imageFrame = Object(_decoders_decodeJPEGBaseline_js__WEBPACK_IMPORTED_MODULE_3__["default"])(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.57') {
    // JPEG Lossless, Nonhierarchical (Processes 14)
    imageFrame = Object(_decoders_decodeJPEGLossless_js__WEBPACK_IMPORTED_MODULE_4__["default"])(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.70') {
    // JPEG Lossless, Nonhierarchical (Processes 14 [Selection 1])
    imageFrame = Object(_decoders_decodeJPEGLossless_js__WEBPACK_IMPORTED_MODULE_4__["default"])(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.80') {
    // JPEG-LS Lossless Image Compression
    imageFrame = Object(_decoders_decodeJPEGLS_js__WEBPACK_IMPORTED_MODULE_5__["default"])(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.81') {
    // JPEG-LS Lossy (Near-Lossless) Image Compression
    imageFrame = Object(_decoders_decodeJPEGLS_js__WEBPACK_IMPORTED_MODULE_5__["default"])(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.90') {
    // JPEG 2000 Lossless
    imageFrame = Object(_decoders_decodeJPEG2000_js__WEBPACK_IMPORTED_MODULE_6__["default"])(imageFrame, pixelData, decodeConfig, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.91') {
    // JPEG 2000 Lossy
    imageFrame = Object(_decoders_decodeJPEG2000_js__WEBPACK_IMPORTED_MODULE_6__["default"])(imageFrame, pixelData, decodeConfig, options);
  } else {
    throw new Error("no decoder for transfer syntax ".concat(transferSyntax));
  }
  /* Don't know if these work...
   // JPEG 2000 Part 2 Multicomponent Image Compression (Lossless Only)
   else if(transferSyntax === "1.2.840.10008.1.2.4.92")
   {
   return decodeJPEG2000(dataSet, frame);
   }
   // JPEG 2000 Part 2 Multicomponent Image Compression
   else if(transferSyntax === "1.2.840.10008.1.2.4.93")
   {
   return decodeJPEG2000(dataSet, frame);
   }
   */


  var shouldShift = imageFrame.pixelRepresentation !== undefined && imageFrame.pixelRepresentation === 1;
  var shift = shouldShift && imageFrame.bitsStored !== undefined ? 32 - imageFrame.bitsStored : undefined;

  if (shouldShift && shift !== undefined) {
    for (var i = 0; i < imageFrame.pixelData.length; i++) {
      // eslint-disable-next-line no-bitwise
      imageFrame.pixelData[i] = imageFrame.pixelData[i] << shift >> shift;
    }
  }

  var end = new Date().getTime();
  imageFrame.decodeTimeInMS = end - start;
  return imageFrame;
}

/* harmony default export */ __webpack_exports__["default"] = (decodeImageFrame);

/***/ }),

/***/ "./shared/decoders/decodeBigEndian.js":
/*!********************************************!*\
  !*** ./shared/decoders/decodeBigEndian.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint no-bitwise: 0 */
function swap16(val) {
  return (val & 0xFF) << 8 | val >> 8 & 0xFF;
}

function decodeBigEndian(imageFrame, pixelData) {
  if (imageFrame.bitsAllocated === 16) {
    var arrayBuffer = pixelData.buffer;
    var offset = pixelData.byteOffset;
    var length = pixelData.length; // if pixel data is not aligned on even boundary, shift it so we can create the 16 bit array
    // buffers on it

    if (offset % 2) {
      arrayBuffer = arrayBuffer.slice(offset);
      offset = 0;
    }

    if (imageFrame.pixelRepresentation === 0) {
      imageFrame.pixelData = new Uint16Array(arrayBuffer, offset, length / 2);
    } else {
      imageFrame.pixelData = new Int16Array(arrayBuffer, offset, length / 2);
    } // Do the byte swap


    for (var i = 0; i < imageFrame.pixelData.length; i++) {
      imageFrame.pixelData[i] = swap16(imageFrame.pixelData[i]);
    }
  } else if (imageFrame.bitsAllocated === 8) {
    imageFrame.pixelData = pixelData;
  }

  return imageFrame;
}

/* harmony default export */ __webpack_exports__["default"] = (decodeBigEndian);

/***/ }),

/***/ "./shared/decoders/decodeJPEG2000.js":
/*!*******************************************!*\
  !*** ./shared/decoders/decodeJPEG2000.js ***!
  \*******************************************/
/*! exports provided: default, initializeJPEG2000 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeJPEG2000", function() { return initializeJPEG2000; });
function decodeJpx(imageFrame, pixelData) {
  var jpxImage = new JpxImage();
  jpxImage.parse(pixelData);
  var tileCount = jpxImage.tiles.length;

  if (tileCount !== 1) {
    throw new Error("JPEG2000 decoder returned a tileCount of ".concat(tileCount, ", when 1 is expected"));
  }

  imageFrame.columns = jpxImage.width;
  imageFrame.rows = jpxImage.height;
  imageFrame.pixelData = jpxImage.tiles[0].items;
  return imageFrame;
}

var openJPEG;

function decodeOpenJPEG(data, bytesPerPixel, signed) {
  var dataPtr = openJPEG._malloc(data.length);

  openJPEG.writeArrayToMemory(data, dataPtr); // create param outpout

  var imagePtrPtr = openJPEG._malloc(4);

  var imageSizePtr = openJPEG._malloc(4);

  var imageSizeXPtr = openJPEG._malloc(4);

  var imageSizeYPtr = openJPEG._malloc(4);

  var imageSizeCompPtr = openJPEG._malloc(4);

  var t0 = new Date().getTime();
  var ret = openJPEG.ccall('jp2_decode', 'number', ['number', 'number', 'number', 'number', 'number', 'number', 'number'], [dataPtr, data.length, imagePtrPtr, imageSizePtr, imageSizeXPtr, imageSizeYPtr, imageSizeCompPtr]); // add num vomp..etc

  if (ret !== 0) {
    console.log('[opj_decode] decoding failed!');

    openJPEG._free(dataPtr);

    openJPEG._free(openJPEG.getValue(imagePtrPtr, '*'));

    openJPEG._free(imageSizeXPtr);

    openJPEG._free(imageSizeYPtr);

    openJPEG._free(imageSizePtr);

    openJPEG._free(imageSizeCompPtr);

    return;
  }

  var imagePtr = openJPEG.getValue(imagePtrPtr, '*');
  var image = {
    length: openJPEG.getValue(imageSizePtr, 'i32'),
    sx: openJPEG.getValue(imageSizeXPtr, 'i32'),
    sy: openJPEG.getValue(imageSizeYPtr, 'i32'),
    nbChannels: openJPEG.getValue(imageSizeCompPtr, 'i32'),
    // hard coded for now
    perf_timetodecode: undefined,
    pixelData: undefined
  }; // Copy the data from the EMSCRIPTEN heap into the correct type array

  var length = image.sx * image.sy * image.nbChannels;
  var src32 = new Int32Array(openJPEG.HEAP32.buffer, imagePtr, length);

  if (bytesPerPixel === 1) {
    if (Uint8Array.from) {
      image.pixelData = Uint8Array.from(src32);
    } else {
      image.pixelData = new Uint8Array(length);

      for (var i = 0; i < length; i++) {
        image.pixelData[i] = src32[i];
      }
    }
  } else if (signed) {
    if (Int16Array.from) {
      image.pixelData = Int16Array.from(src32);
    } else {
      image.pixelData = new Int16Array(length);

      for (var _i = 0; _i < length; _i++) {
        image.pixelData[_i] = src32[_i];
      }
    }
  } else if (Uint16Array.from) {
    image.pixelData = Uint16Array.from(src32);
  } else {
    image.pixelData = new Uint16Array(length);

    for (var _i2 = 0; _i2 < length; _i2++) {
      image.pixelData[_i2] = src32[_i2];
    }
  }

  var t1 = new Date().getTime();
  image.perf_timetodecode = t1 - t0; // free

  openJPEG._free(dataPtr);

  openJPEG._free(imagePtrPtr);

  openJPEG._free(imagePtr);

  openJPEG._free(imageSizePtr);

  openJPEG._free(imageSizeXPtr);

  openJPEG._free(imageSizeYPtr);

  openJPEG._free(imageSizeCompPtr);

  return image;
}

function decodeOpenJpeg2000(imageFrame, pixelData) {
  var bytesPerPixel = imageFrame.bitsAllocated <= 8 ? 1 : 2;
  var signed = imageFrame.pixelRepresentation === 1;
  var image = decodeOpenJPEG(pixelData, bytesPerPixel, signed);
  imageFrame.columns = image.sx;
  imageFrame.rows = image.sy;
  imageFrame.pixelData = image.pixelData;

  if (image.nbChannels > 1) {
    imageFrame.photometricInterpretation = 'RGB';
  }

  return imageFrame;
}

function initializeJPEG2000(decodeConfig) {
  // check to make sure codec is loaded
  if (!decodeConfig.usePDFJS) {
    if (typeof OpenJPEG === 'undefined') {
      throw new Error('OpenJPEG decoder not loaded');
    }
  }

  if (!openJPEG) {
    openJPEG = OpenJPEG();

    if (!openJPEG || !openJPEG._jp2_decode) {
      throw new Error('OpenJPEG failed to initialize');
    }
  }
}

function decodeJPEG2000(imageFrame, pixelData, decodeConfig) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  initializeJPEG2000(decodeConfig);

  if (options.usePDFJS || decodeConfig.usePDFJS) {
    // OHIF image-JPEG2000 https://github.com/OHIF/image-JPEG2000
    // console.log('PDFJS')
    return decodeJpx(imageFrame, pixelData);
  } // OpenJPEG2000 https://github.com/jpambrun/openjpeg
  // console.log('OpenJPEG')


  return decodeOpenJpeg2000(imageFrame, pixelData);
}

/* harmony default export */ __webpack_exports__["default"] = (decodeJPEG2000);


/***/ }),

/***/ "./shared/decoders/decodeJPEGBaseline.js":
/*!***********************************************!*\
  !*** ./shared/decoders/decodeJPEGBaseline.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function decodeJPEGBaseline(imageFrame, pixelData) {
  // check to make sure codec is loaded
  if (typeof JpegImage === 'undefined') {
    throw new Error('No JPEG Baseline decoder loaded');
  }

  var jpeg = new JpegImage();
  jpeg.parse(pixelData); // Do not use the internal jpeg.js color transformation,
  // since we will handle this afterwards

  jpeg.colorTransform = false;

  if (imageFrame.bitsAllocated === 8) {
    imageFrame.pixelData = jpeg.getData(imageFrame.columns, imageFrame.rows);
    return imageFrame;
  } else if (imageFrame.bitsAllocated === 16) {
    imageFrame.pixelData = jpeg.getData16(imageFrame.columns, imageFrame.rows);
    return imageFrame;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (decodeJPEGBaseline);

/***/ }),

/***/ "./shared/decoders/decodeJPEGLS.js":
/*!*****************************************!*\
  !*** ./shared/decoders/decodeJPEGLS.js ***!
  \*****************************************/
/*! exports provided: default, initializeJPEGLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeJPEGLS", function() { return initializeJPEGLS; });
var charLS;

function jpegLSDecode(data, isSigned) {
  // prepare input parameters
  var dataPtr = charLS._malloc(data.length);

  charLS.writeArrayToMemory(data, dataPtr); // prepare output parameters

  var imagePtrPtr = charLS._malloc(4);

  var imageSizePtr = charLS._malloc(4);

  var widthPtr = charLS._malloc(4);

  var heightPtr = charLS._malloc(4);

  var bitsPerSamplePtr = charLS._malloc(4);

  var stridePtr = charLS._malloc(4);

  var allowedLossyErrorPtr = charLS._malloc(4);

  var componentsPtr = charLS._malloc(4);

  var interleaveModePtr = charLS._malloc(4); // Decode the image


  var result = charLS.ccall('jpegls_decode', 'number', ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number'], [dataPtr, data.length, imagePtrPtr, imageSizePtr, widthPtr, heightPtr, bitsPerSamplePtr, stridePtr, componentsPtr, allowedLossyErrorPtr, interleaveModePtr]); // Extract result values into object

  var image = {
    result: result,
    width: charLS.getValue(widthPtr, 'i32'),
    height: charLS.getValue(heightPtr, 'i32'),
    bitsPerSample: charLS.getValue(bitsPerSamplePtr, 'i32'),
    stride: charLS.getValue(stridePtr, 'i32'),
    components: charLS.getValue(componentsPtr, 'i32'),
    allowedLossyError: charLS.getValue(allowedLossyErrorPtr, 'i32'),
    interleaveMode: charLS.getValue(interleaveModePtr, 'i32'),
    pixelData: undefined
  }; // Copy image from emscripten heap into appropriate array buffer type

  var imagePtr = charLS.getValue(imagePtrPtr, '*');

  if (image.bitsPerSample <= 8) {
    image.pixelData = new Uint8Array(image.width * image.height * image.components);
    image.pixelData.set(new Uint8Array(charLS.HEAP8.buffer, imagePtr, image.pixelData.length));
  } else if (isSigned) {
    image.pixelData = new Int16Array(image.width * image.height * image.components);
    image.pixelData.set(new Int16Array(charLS.HEAP16.buffer, imagePtr, image.pixelData.length));
  } else {
    image.pixelData = new Uint16Array(image.width * image.height * image.components);
    image.pixelData.set(new Uint16Array(charLS.HEAP16.buffer, imagePtr, image.pixelData.length));
  } // free memory and return image object


  charLS._free(dataPtr);

  charLS._free(imagePtr);

  charLS._free(imagePtrPtr);

  charLS._free(imageSizePtr);

  charLS._free(widthPtr);

  charLS._free(heightPtr);

  charLS._free(bitsPerSamplePtr);

  charLS._free(stridePtr);

  charLS._free(componentsPtr);

  charLS._free(interleaveModePtr);

  return image;
}

function initializeJPEGLS() {
  // check to make sure codec is loaded
  if (typeof CharLS === 'undefined') {
    throw new Error('No JPEG-LS decoder loaded');
  } // Try to initialize CharLS
  // CharLS https://github.com/cornerstonejs/charls


  if (!charLS) {
    charLS = CharLS();

    if (!charLS || !charLS._jpegls_decode) {
      throw new Error('JPEG-LS failed to initialize');
    }
  }
}

function decodeJPEGLS(imageFrame, pixelData) {
  initializeJPEGLS();
  var image = jpegLSDecode(pixelData, imageFrame.pixelRepresentation === 1); // throw error if not success or too much data

  if (image.result !== 0 && image.result !== 6) {
    throw new Error("JPEG-LS decoder failed to decode frame (error code ".concat(image.result, ")"));
  }

  imageFrame.columns = image.width;
  imageFrame.rows = image.height;
  imageFrame.pixelData = image.pixelData;
  return imageFrame;
}

/* harmony default export */ __webpack_exports__["default"] = (decodeJPEGLS);


/***/ }),

/***/ "./shared/decoders/decodeJPEGLossless.js":
/*!***********************************************!*\
  !*** ./shared/decoders/decodeJPEGLossless.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function decodeJPEGLossless(imageFrame, pixelData) {
  // check to make sure codec is loaded
  if (typeof jpeg === 'undefined' || typeof jpeg.lossless === 'undefined' || typeof jpeg.lossless.Decoder === 'undefined') {
    throw new Error('No JPEG Lossless decoder loaded');
  }

  var byteOutput = imageFrame.bitsAllocated <= 8 ? 1 : 2; // console.time('jpeglossless');

  var buffer = pixelData.buffer;
  var decoder = new jpeg.lossless.Decoder();
  var decompressedData = decoder.decode(buffer, pixelData.byteOffset, pixelData.length, byteOutput); // console.timeEnd('jpeglossless');

  if (imageFrame.pixelRepresentation === 0) {
    if (imageFrame.bitsAllocated === 16) {
      imageFrame.pixelData = new Uint16Array(decompressedData.buffer);
      return imageFrame;
    } // untested!


    imageFrame.pixelData = new Uint8Array(decompressedData.buffer);
    return imageFrame;
  }

  imageFrame.pixelData = new Int16Array(decompressedData.buffer);
  return imageFrame;
}

/* harmony default export */ __webpack_exports__["default"] = (decodeJPEGLossless);

/***/ }),

/***/ "./shared/decoders/decodeLittleEndian.js":
/*!***********************************************!*\
  !*** ./shared/decoders/decodeLittleEndian.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function decodeLittleEndian(imageFrame, pixelData) {
  var arrayBuffer = pixelData.buffer;
  var offset = pixelData.byteOffset;
  var length = pixelData.length;

  if (imageFrame.bitsAllocated === 16) {
    // if pixel data is not aligned on even boundary, shift it so we can create the 16 bit array
    // buffers on it
    if (offset % 2) {
      arrayBuffer = arrayBuffer.slice(offset);
      offset = 0;
    }

    if (imageFrame.pixelRepresentation === 0) {
      imageFrame.pixelData = new Uint16Array(arrayBuffer, offset, length / 2);
    } else {
      imageFrame.pixelData = new Int16Array(arrayBuffer, offset, length / 2);
    }
  } else if (imageFrame.bitsAllocated === 8 || imageFrame.bitsAllocated === 1) {
    imageFrame.pixelData = pixelData;
  } else if (imageFrame.bitsAllocated === 32) {
    // if pixel data is not aligned on even boundary, shift it
    if (offset % 2) {
      arrayBuffer = arrayBuffer.slice(offset);
      offset = 0;
    }

    imageFrame.pixelData = new Float32Array(arrayBuffer, offset, length / 4);
  }

  return imageFrame;
}

/* harmony default export */ __webpack_exports__["default"] = (decodeLittleEndian);

/***/ }),

/***/ "./shared/decoders/decodeRLE.js":
/*!**************************************!*\
  !*** ./shared/decoders/decodeRLE.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function decodeRLE(imageFrame, pixelData) {
  if (imageFrame.bitsAllocated === 8) {
    if (imageFrame.planarConfiguration) {
      return decode8Planar(imageFrame, pixelData);
    }

    return decode8(imageFrame, pixelData);
  } else if (imageFrame.bitsAllocated === 16) {
    return decode16(imageFrame, pixelData);
  }

  throw new Error('unsupported pixel format for RLE');
}

function decode8(imageFrame, pixelData) {
  var frameData = pixelData;
  var frameSize = imageFrame.rows * imageFrame.columns;
  var outFrame = new ArrayBuffer(frameSize * imageFrame.samplesPerPixel);
  var header = new DataView(frameData.buffer, frameData.byteOffset);
  var data = new Int8Array(frameData.buffer, frameData.byteOffset);
  var out = new Int8Array(outFrame);
  var outIndex = 0;
  var numSegments = header.getInt32(0, true);

  for (var s = 0; s < numSegments; ++s) {
    outIndex = s;
    var inIndex = header.getInt32((s + 1) * 4, true);
    var maxIndex = header.getInt32((s + 2) * 4, true);

    if (maxIndex === 0) {
      maxIndex = frameData.length;
    }

    var endOfSegment = frameSize * numSegments;

    while (inIndex < maxIndex) {
      var n = data[inIndex++];

      if (n >= 0 && n <= 127) {
        // copy n bytes
        for (var i = 0; i < n + 1 && outIndex < endOfSegment; ++i) {
          out[outIndex] = data[inIndex++];
          outIndex += imageFrame.samplesPerPixel;
        }
      } else if (n <= -1 && n >= -127) {
        var value = data[inIndex++]; // run of n bytes

        for (var j = 0; j < -n + 1 && outIndex < endOfSegment; ++j) {
          out[outIndex] = value;
          outIndex += imageFrame.samplesPerPixel;
        }
      }
      /* else if (n === -128) {
      } // do nothing */

    }
  }

  imageFrame.pixelData = new Uint8Array(outFrame);
  return imageFrame;
}

function decode8Planar(imageFrame, pixelData) {
  var frameData = pixelData;
  var frameSize = imageFrame.rows * imageFrame.columns;
  var outFrame = new ArrayBuffer(frameSize * imageFrame.samplesPerPixel);
  var header = new DataView(frameData.buffer, frameData.byteOffset);
  var data = new Int8Array(frameData.buffer, frameData.byteOffset);
  var out = new Int8Array(outFrame);
  var outIndex = 0;
  var numSegments = header.getInt32(0, true);

  for (var s = 0; s < numSegments; ++s) {
    outIndex = s * frameSize;
    var inIndex = header.getInt32((s + 1) * 4, true);
    var maxIndex = header.getInt32((s + 2) * 4, true);

    if (maxIndex === 0) {
      maxIndex = frameData.length;
    }

    var endOfSegment = frameSize * numSegments;

    while (inIndex < maxIndex) {
      var n = data[inIndex++];

      if (n >= 0 && n <= 127) {
        // copy n bytes
        for (var i = 0; i < n + 1 && outIndex < endOfSegment; ++i) {
          out[outIndex] = data[inIndex++];
          outIndex++;
        }
      } else if (n <= -1 && n >= -127) {
        var value = data[inIndex++]; // run of n bytes

        for (var j = 0; j < -n + 1 && outIndex < endOfSegment; ++j) {
          out[outIndex] = value;
          outIndex++;
        }
      }
      /* else if (n === -128) {
      } // do nothing */

    }
  }

  imageFrame.pixelData = new Uint8Array(outFrame);
  return imageFrame;
}

function decode16(imageFrame, pixelData) {
  var frameData = pixelData;
  var frameSize = imageFrame.rows * imageFrame.columns;
  var outFrame = new ArrayBuffer(frameSize * imageFrame.samplesPerPixel * 2);
  var header = new DataView(frameData.buffer, frameData.byteOffset);
  var data = new Int8Array(frameData.buffer, frameData.byteOffset);
  var out = new Int8Array(outFrame);
  var numSegments = header.getInt32(0, true);

  for (var s = 0; s < numSegments; ++s) {
    var outIndex = 0;
    var highByte = s === 0 ? 1 : 0;
    var inIndex = header.getInt32((s + 1) * 4, true);
    var maxIndex = header.getInt32((s + 2) * 4, true);

    if (maxIndex === 0) {
      maxIndex = frameData.length;
    }

    while (inIndex < maxIndex) {
      var n = data[inIndex++];

      if (n >= 0 && n <= 127) {
        for (var i = 0; i < n + 1 && outIndex < frameSize; ++i) {
          out[outIndex * 2 + highByte] = data[inIndex++];
          outIndex++;
        }
      } else if (n <= -1 && n >= -127) {
        var value = data[inIndex++];

        for (var j = 0; j < -n + 1 && outIndex < frameSize; ++j) {
          out[outIndex * 2 + highByte] = value;
          outIndex++;
        }
      }
      /* else if (n === -128) {
      } // do nothing */

    }
  }

  if (imageFrame.pixelRepresentation === 0) {
    imageFrame.pixelData = new Uint16Array(outFrame);
  } else {
    imageFrame.pixelData = new Int16Array(outFrame);
  }

  return imageFrame;
}

/* harmony default export */ __webpack_exports__["default"] = (decodeRLE);

/***/ }),

/***/ "./shared/getMinMax.js":
/*!*****************************!*\
  !*** ./shared/getMinMax.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Calculate the minimum and maximum values in an Array
 *
 * @param {Number[]} storedPixelData
 * @return {{min: Number, max: Number}}
 */
function getMinMax(storedPixelData) {
  // we always calculate the min max values since they are not always
  // present in DICOM and we don't want to trust them anyway as cornerstone
  // depends on us providing reliable values for these
  var min = storedPixelData[0];
  var max = storedPixelData[0];
  var storedPixel;
  var numPixels = storedPixelData.length;

  for (var index = 1; index < numPixels; index++) {
    storedPixel = storedPixelData[index];
    min = Math.min(min, storedPixel);
    max = Math.max(max, storedPixel);
  }/*! cornerstone-wado-image-loader - 2.2.2 - 2018-12-05 | (c) 2016 Chris Hafey | https://github.com/cornerstonejs/cornerstoneWADOImageLoader */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("cornerstoneWADOImageLoader",[],t):"object"==typeof exports?exports.cornerstoneWADOImageLoader=t():e.cornerstoneWADOImageLoader=t()}(this,function(){return function(r){var a={};function n(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}return n.m=r,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,r){"use strict";t.a=function(e){for(var t,r=e[0],a=e[0],n=e.length,o=1;o<n;o++)t=e[o],r=Math.min(r,t),a=Math.max(a,t);return{min:r,max:a}}},function(e,t,r){"use strict";var m;function a(){if("undefined"==typeof CharLS)throw new Error("No JPEG-LS decoder loaded");if(!(m||(m=CharLS())&&m._jpegls_decode))throw new Error("JPEG-LS failed to initialize")}r.d(t,"b",function(){return a}),t.a=function(e,t){a();var r=function(e,t){var r=m._malloc(e.length);m.writeArrayToMemory(e,r);var a=m._malloc(4),n=m._malloc(4),o=m._malloc(4),i=m._malloc(4),l=m._malloc(4),s=m._malloc(4),u=m._malloc(4),c=m._malloc(4),f=m._malloc(4),d={result:m.ccall("jpegls_decode","number",["number","number","number","number","number","number","number","number","number","number","number"],[r,e.length,a,n,o,i,l,s,c,u,f]),width:m.getValue(o,"i32"),height:m.getValue(i,"i32"),bitsPerSample:m.getValue(l,"i32"),stride:m.getValue(s,"i32"),components:m.getValue(c,"i32"),allowedLossyError:m.getValue(u,"i32"),interleaveMode:m.getValue(f,"i32"),pixelData:void 0},p=m.getValue(a,"*");return d.bitsPerSample<=8?(d.pixelData=new Uint8Array(d.width*d.height*d.components),d.pixelData.set(new Uint8Array(m.HEAP8.buffer,p,d.pixelData.length))):t?(d.pixelData=new Int16Array(d.width*d.height*d.components),d.pixelData.set(new Int16Array(m.HEAP16.buffer,p,d.pixelData.length))):(d.pixelData=new Uint16Array(d.width*d.height*d.components),d.pixelData.set(new Uint16Array(m.HEAP16.buffer,p,d.pixelData.length))),m._free(r),m._free(p),m._free(a),m._free(n),m._free(o),m._free(i),m._free(l),m._free(s),m._free(c),m._free(f),d}(t,1===e.pixelRepresentation);if(0!==r.result&&6!==r.result)throw new Error("JPEG-LS decoder failed to decode frame (error code ".concat(r.result,")"));return e.columns=r.width,e.rows=r.height,e.pixelData=r.pixelData,e}},function(e,t,r){"use strict";var h;function n(e,t){var r=function(e,t,r){var a=h._malloc(e.length);h.writeArrayToMemory(e,a);var n=h._malloc(4),o=h._malloc(4),i=h._malloc(4),l=h._malloc(4),s=h._malloc(4),u=(new Date).getTime();if(0!==h.ccall("jp2_decode","number",["number","number","number","number","number","number","number"],[a,e.length,n,o,i,l,s]))return console.log("[opj_decode] decoding failed!"),h._free(a),h._free(h.getValue(n,"*")),h._free(i),h._free(l),h._free(o),void h._free(s);var c=h.getValue(n,"*"),f={length:h.getValue(o,"i32"),sx:h.getValue(i,"i32"),sy:h.getValue(l,"i32"),nbChannels:h.getValue(s,"i32"),perf_timetodecode:void 0,pixelData:void 0},d=f.sx*f.sy*f.nbChannels,p=new Int32Array(h.HEAP32.buffer,c,d);if(1===t)if(Uint8Array.from)f.pixelData=Uint8Array.from(p);else{f.pixelData=new Uint8Array(d);for(var m=0;m<d;m++)f.pixelData[m]=p[m]}else if(r)if(Int16Array.from)f.pixelData=Int16Array.from(p);else{f.pixelData=new Int16Array(d);for(var g=0;g<d;g++)f.pixelData[g]=p[g]}else if(Uint16Array.from)f.pixelData=Uint16Array.from(p);else{f.pixelData=new Uint16Array(d);for(var v=0;v<d;v++)f.pixelData[v]=p[v]}var x=(new Date).getTime();return f.perf_timetodecode=x-u,h._free(a),h._free(n),h._free(c),h._free(o),h._free(i),h._free(l),h._free(s),f}(t,e.bitsAllocated<=8?1:2,1===e.pixelRepresentation);return e.columns=r.sx,e.rows=r.sy,e.pixelData=r.pixelData,1<r.nbChannels&&(e.photometricInterpretation="RGB"),e}function o(e){if(!e.usePDFJS&&"undefined"==typeof OpenJPEG)throw new Error("OpenJPEG decoder not loaded");if(!(h||(h=OpenJPEG())&&h._jp2_decode))throw new Error("OpenJPEG failed to initialize")}r.d(t,"b",function(){return o}),t.a=function(e,t,r){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};return o(r),a.usePDFJS||r.usePDFJS?function(e,t){var r=new JpxImage;r.parse(t);var a=r.tiles.length;if(1!==a)throw new Error("JPEG2000 decoder returned a tileCount of ".concat(a,", when 1 is expected"));return e.columns=r.width,e.rows=r.height,e.pixelData=r.tiles[0].items,e}(e,t):n(e,t)}},function(e,t,r){"use strict";t.a="2.2.2"},function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r(0);function a(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],r=Object(n.a)(e.pixelData),a=!(o(e.smallestPixelValue)&&o(e.largestPixelValue));!0!==t||a?(e.smallestPixelValue=r.min,e.largestPixelValue=r.max):(e.smallestPixelValue!==r.min&&console.warn("Image smallestPixelValue tag is incorrect. Rendering performance will suffer considerably."),e.largestPixelValue!==r.max&&console.warn("Image largestPixelValue tag is incorrect. Rendering performance will suffer considerably."))}function o(e){return"number"==typeof e}},function(e,t,r){"use strict";var c=function(e,t){var r=t.buffer,a=t.byteOffset,n=t.length;return 16===e.bitsAllocated?(a%2&&(r=r.slice(a),a=0),0===e.pixelRepresentation?e.pixelData=new Uint16Array(r,a,n/2):e.pixelData=new Int16Array(r,a,n/2)):8===e.bitsAllocated||1===e.bitsAllocated?e.pixelData=t:32===e.bitsAllocated&&(a%2&&(r=r.slice(a),a=0),e.pixelData=new Float32Array(r,a,n/4)),e};var f=function(e,t){if(16===e.bitsAllocated){var r=t.buffer,a=t.byteOffset,n=t.length;a%2&&(r=r.slice(a),a=0),0===e.pixelRepresentation?e.pixelData=new Uint16Array(r,a,n/2):e.pixelData=new Int16Array(r,a,n/2);for(var o=0;o<e.pixelData.length;o++)e.pixelData[o]=(255&(i=e.pixelData[o]))<<8|i>>8&255}else 8===e.bitsAllocated&&(e.pixelData=t);var i;return e};var d=function(e,t){if(8===e.bitsAllocated)return e.planarConfiguration?function(e,t){for(var r=t,a=e.rows*e.columns,n=new ArrayBuffer(a*e.samplesPerPixel),o=new DataView(r.buffer,r.byteOffset),i=new Int8Array(r.buffer,r.byteOffset),l=new Int8Array(n),s=0,u=o.getInt32(0,!0),c=0;c<u;++c){s=c*a;var f=o.getInt32(4*(c+1),!0),d=o.getInt32(4*(c+2),!0);0===d&&(d=r.length);for(var p=a*u;f<d;){var m=i[f++];if(0<=m&&m<=127)for(var g=0;g<m+1&&s<p;++g)l[s]=i[f++],s++;else if(m<=-1&&-127<=m)for(var v=i[f++],x=0;x<1-m&&s<p;++x)l[s]=v,s++}}return e.pixelData=new Uint8Array(n),e}(e,t):function(e,t){for(var r=t,a=e.rows*e.columns,n=new ArrayBuffer(a*e.samplesPerPixel),o=new DataView(r.buffer,r.byteOffset),i=new Int8Array(r.buffer,r.byteOffset),l=new Int8Array(n),s=0,u=o.getInt32(0,!0),c=0;c<u;++c){s=c;var f=o.getInt32(4*(c+1),!0),d=o.getInt32(4*(c+2),!0);0===d&&(d=r.length);for(var p=a*u;f<d;){var m=i[f++];if(0<=m&&m<=127)for(var g=0;g<m+1&&s<p;++g)l[s]=i[f++],s+=e.samplesPerPixel;else if(m<=-1&&-127<=m)for(var v=i[f++],x=0;x<1-m&&s<p;++x)l[s]=v,s+=e.samplesPerPixel}}return e.pixelData=new Uint8Array(n),e}(e,t);if(16===e.bitsAllocated)return function(e,t){for(var r=t,a=e.rows*e.columns,n=new ArrayBuffer(a*e.samplesPerPixel*2),o=new DataView(r.buffer,r.byteOffset),i=new Int8Array(r.buffer,r.byteOffset),l=new Int8Array(n),s=o.getInt32(0,!0),u=0;u<s;++u){var c=0,f=0===u?1:0,d=o.getInt32(4*(u+1),!0),p=o.getInt32(4*(u+2),!0);for(0===p&&(p=r.length);d<p;){var m=i[d++];if(0<=m&&m<=127)for(var g=0;g<m+1&&c<a;++g)l[2*c+f]=i[d++],c++;else if(m<=-1&&-127<=m)for(var v=i[d++],x=0;x<1-m&&c<a;++x)l[2*c+f]=v,c++}}return 0===e.pixelRepresentation?e.pixelData=new Uint16Array(n):e.pixelData=new Int16Array(n),e}(e,t);throw new Error("unsupported pixel format for RLE")};var p=function(e,t){if("undefined"==typeof JpegImage)throw new Error("No JPEG Baseline decoder loaded");var r=new JpegImage;return r.parse(t),r.colorTransform=!1,8===e.bitsAllocated?(e.pixelData=r.getData(e.columns,e.rows),e):16===e.bitsAllocated?(e.pixelData=r.getData16(e.columns,e.rows),e):void 0};var m=function(e,t){if("undefined"==typeof jpeg||void 0===jpeg.lossless||void 0===jpeg.lossless.Decoder)throw new Error("No JPEG Lossless decoder loaded");var r=e.bitsAllocated<=8?1:2,a=t.buffer,n=(new jpeg.lossless.Decoder).decode(a,t.byteOffset,t.length,r);return 0===e.pixelRepresentation?16===e.bitsAllocated?e.pixelData=new Uint16Array(n.buffer):e.pixelData=new Uint8Array(n.buffer):e.pixelData=new Int16Array(n.buffer),e},g=r(1),v=r(2);t.a=function(e,t,r,a,n){var o=(new Date).getTime();if("1.2.840.10008.1.2"===t)e=c(e,r);else if("1.2.840.10008.1.2.1"===t)e=c(e,r);else if("1.2.840.10008.1.2.2"===t)e=f(e,r);else if("1.2.840.10008.1.2.1.99"===t)e=c(e,r);else if("1.2.840.10008.1.2.5"===t)e=d(e,r);else if("1.2.840.10008.1.2.4.50"===t)e=p(e,r);else if("1.2.840.10008.1.2.4.51"===t)e=p(e,r);else if("1.2.840.10008.1.2.4.57"===t)e=m(e,r);else if("1.2.840.10008.1.2.4.70"===t)e=m(e,r);else if("1.2.840.10008.1.2.4.80"===t)e=Object(g.a)(e,r);else if("1.2.840.10008.1.2.4.81"===t)e=Object(g.a)(e,r);else if("1.2.840.10008.1.2.4.90"===t)e=Object(v.a)(e,r,a,n);else{if("1.2.840.10008.1.2.4.91"!==t)throw new Error("no decoder for transfer syntax ".concat(t));e=Object(v.a)(e,r,a,n)}var i=void 0!==e.pixelRepresentation&&1===e.pixelRepresentation,l=i&&void 0!==e.bitsStored?32-e.bitsStored:void 0;if(i&&void 0!==l)for(var s=0;s<e.pixelData.length;s++)e.pixelData[s]=e.pixelData[s]<<l>>l;var u=(new Date).getTime();return e.decodeTimeInMS=u-o,e}},function(e,t,r){"use strict";r.r(t);var a=function(e,t){if(void 0===e)throw new Error("decodeRGB: rgbBuffer must not be undefined");if(e.length%3!=0)throw new Error("decodeRGB: rgbBuffer length must be divisible by 3");for(var r=e.length/3,a=0,n=0,o=0;o<r;o++)t[n++]=e[a++],t[n++]=e[a++],t[n++]=e[a++],t[n++]=255},n=function(e,t){if(void 0===e)throw new Error("decodeRGB: rgbBuffer must not be undefined");if(e.length%3!=0)throw new Error("decodeRGB: rgbBuffer length must be divisible by 3");for(var r=e.length/3,a=0,n=0,o=r,i=2*r,l=0;l<r;l++)t[a++]=e[n++],t[a++]=e[o++],t[a++]=e[i++],t[a++]=255},o=function(e,t){if(void 0===e)throw new Error("decodeRGB: ybrBuffer must not be undefined");if(e.length%3!=0)throw new Error("decodeRGB: ybrBuffer length must be divisble by 3");for(var r=e.length/3,a=0,n=0,o=0;o<r;o++){var i=e[a++],l=e[a++],s=e[a++];t[n++]=i+1.402*(s-128),t[n++]=i-.34414*(l-128)-.71414*(s-128),t[n++]=i+1.772*(l-128),t[n++]=255}},i=function(e,t){if(void 0===e)throw new Error("decodeRGB: ybrBuffer must not be undefined");if(e.length%3!=0)throw new Error("decodeRGB: ybrBuffer length must be divisble by 3");for(var r=e.length/3,a=0,n=0,o=r,i=2*r,l=0;l<r;l++){var s=e[n++],u=e[o++],c=e[i++];t[a++]=s+1.402*(c-128),t[a++]=s-.34414*(u-128)-.71414*(c-128),t[a++]=s+1.772*(u-128),t[a++]=255}};function x(e,t){for(var r=e.length,a=new Uint8ClampedArray(r),n=0;n<r;++n)a[n]=e[n]>>t;return a}var l=function(e,t){for(var r=e.columns*e.rows,a=e.pixelData,n=e.redPaletteColorLookupTableData,o=e.greenPaletteColorLookupTableData,i=e.bluePaletteColorLookupTableData,l=e.redPaletteColorLookupTableData.length,s=0,u=0,c=e.redPaletteColorLookupTableDescriptor[1],f=8===e.redPaletteColorLookupTableDescriptor[2]?0:8,d=x(n,f),p=x(o,f),m=x(i,f),g=0;g<r;++g){var v=a[s++];v<c?v=0:c+l-1<v?v=l-1:v-=c,t[u++]=d[v],t[u++]=p[v],t[u++]=m[v],t[u++]=255}};function s(e,t){if(e.elements[t]&&6===e.elements[t].length)return[e.uint16(t,0),e.uint16(t,1),e.uint16(t,2)]}function u(e,t,r){for(var a=[],n=e.elements[t],o=0;o<r[0];o++)16===r[2]?a[o]=e.uint16(t,o):a[o]=e.byteArray[o+n.dataOffset];return a}var g=function(e){var t,r,a,n={samplesPerPixel:e.uint16("x00280002"),photometricInterpretation:e.string("x00280004"),rows:e.uint16("x00280010"),columns:e.uint16("x00280011"),bitsAllocated:e.uint16("x00280100"),bitsStored:e.uint16("x00280101"),highBit:e.uint16("x00280102"),pixelRepresentation:e.uint16("x00280103"),planarConfiguration:e.uint16("x00280006"),pixelAspectRatio:e.string("x00280034")};return r=n,a=(t=e).uint16("x00280103"),r.largestPixelValue=0===a?(r.smallestPixelValue=t.uint16("x00280106"),t.uint16("x00280107")):(r.smallestPixelValue=t.int16("x00280106"),t.int16("x00280107")),"PALETTE COLOR"===n.photometricInterpretation&&e.elements.x00281101&&function(e,t){t.redPaletteColorLookupTableDescriptor=s(e,"x00281101"),t.greenPaletteColorLookupTableDescriptor=s(e,"x00281102"),t.bluePaletteColorLookupTableDescriptor=s(e,"x00281103"),0===t.redPaletteColorLookupTableDescriptor[0]&&(t.redPaletteColorLookupTableDescriptor[0]=65536,t.greenPaletteColorLookupTableDescriptor[0]=65536,t.bluePaletteColorLookupTableDescriptor[0]=65536);var r=t.redPaletteColorLookupTableDescriptor[0],a=e.elements.x00281201.length===r?8:16;t.redPaletteColorLookupTableDescriptor[2]!==a&&(t.redPaletteColorLookupTableDescriptor[2]=a,t.greenPaletteColorLookupTableDescriptor[2]=a,t.bluePaletteColorLookupTableDescriptor[2]=a),t.redPaletteColorLookupTableData=u(e,"x00281201",t.redPaletteColorLookupTableDescriptor),t.greenPaletteColorLookupTableData=u(e,"x00281202",t.greenPaletteColorLookupTableDescriptor),t.bluePaletteColorLookupTableData=u(e,"x00281203",t.bluePaletteColorLookupTableDescriptor)}(e,n),n};function c(e,t){var r=t.uint16("x00283002",0);0===r&&(r=65535);for(var a={id:"1",firstValueMapped:0===e?t.uint16("x00283002",1):t.int16("x00283002",1),numBitsPerEntry:t.uint16("x00283002",2),lut:[]},n=0;n<r;n++)a.lut[n]=0===e?t.uint16("x00283006",n):t.int16("x00283006",n);return a}var v=function(e,t){if(t&&t.items.length){for(var r=[],a=0;a<t.items.length;a++){var n=c(e,t.items[a].dataSet);n&&r.push(n)}return r}};var h=function(e){var t=e.string("x00080016");if("1.2.840.10008.5.1.4.1.1.2"===t||"1.2.840.10008.5.1.4.1.1.2.1"===t)return 1;var r,a,n,o=e.floatString("x00281052"),i=e.floatString("x00281053");return void 0===o||void 0===i?e.elements.x00283000&&0<e.elements.x00283000.length?0:e.uint16("x00280103"):(a=(r=e).uint16("x00280103"),n=r.uint16("x00280101"),(0===a?0:-1<<n-1)*i+o<0?1:0)};var w=function(e,t,r){var a=[],n=e.string(t);if(n){var o=n.split("\\");if(!(r&&o.length<r)){for(var i=0;i<o.length;i++)a.push(parseFloat(o[i]));return a}}};var d=function(e,t,r){return t=t||0,e&&e.Value?e.Value.length<=t?r:e.Value[t]:r};var f=function(e,t,r){var a=d(e,t,r);if(void 0!==a)return parseFloat(a)};var p=function(e,t){var r=d(e,t);if(void 0!==r)return parseFloat(r)};var m=function(e,t){if(e&&e.Value&&!(t&&e.Value.length<t)){for(var r=[],a=0;a<e.Value.length;a++)r.push(parseFloat(e.Value[a]));return r}},b=[];var y={add:function(e,t){b[e]=t},get:function(e){return b[e]},remove:function(e){b[e]=void 0},purge:function(){b=[]}};var P=function(e,t){var r=fe.dicomParser,a=y.get(t);if(a){if("generalSeriesModule"===e)return{modality:d(a["00080060"]),seriesInstanceUID:d(a["0020000e"]),seriesNumber:p(a["00200011"]),studyInstanceUID:d(a["0020000d"]),seriesDate:r.parseDA(d(a["00080021"])),seriesTime:r.parseTM(d(a["00080031"],0,""))};if("patientStudyModule"===e)return{patientAge:p(a["00101010"]),patientSize:p(a["00101020"]),patientWeight:p(a["00101030"])};if("imagePlaneModule"===e){var n=m(a["00200037"],6),o=m(a["00200032"],3),i=m(a["00280030"],2),l=null,s=null;i&&(s=i[0],l=i[1]);var u=null,c=null;return n&&(u=[parseFloat(n[0]),parseFloat(n[1]),parseFloat(n[2])],c=[parseFloat(n[3]),parseFloat(n[4]),parseFloat(n[5])]),{frameOfReferenceUID:d(a["00200052"]),rows:p(a["00280010"]),columns:p(a["00280011"]),imageOrientationPatient:n,rowCosines:u,columnCosines:c,imagePositionPatient:o,sliceThickness:p(a["00180050"]),sliceLocation:p(a["00201041"]),pixelSpacing:i,rowPixelSpacing:s,columnPixelSpacing:l}}if("imagePixelModule"===e)return{samplesPerPixel:p(a["00280002"]),photometricInterpretation:d(a["00280004"]),rows:p(a["00280010"]),columns:p(a["00280011"]),bitsAllocated:p(a["00280100"]),bitsStored:p(a["00280101"]),highBit:d(a["00280102"]),pixelRepresentation:p(a["00280103"]),planarConfiguration:p(a["00280006"]),pixelAspectRatio:d(a["00280034"]),smallestPixelValue:p(a["00280106"]),largestPixelValue:p(a["00280107"]),redPaletteColorLookupTableDescriptor:m(a["00281101"]),greenPaletteColorLookupTableDescriptor:m(a["00281102"]),bluePaletteColorLookupTableDescriptor:m(a["00281103"]),redPaletteColorLookupTableData:m(a["00281201"]),greenPaletteColorLookupTableData:m(a["00281202"]),bluePaletteColorLookupTableData:m(a["00281203"])};if("voiLutModule"===e)return{windowCenter:m(a["00281050"],1),windowWidth:m(a["00281051"],1)};if("modalityLutModule"===e)return{rescaleIntercept:p(a["00281052"]),rescaleSlope:p(a["00281053"]),rescaleType:d(a["00281054"])};if("sopCommonModule"===e)return{sopClassUID:d(a["00080016"]),sopInstanceUID:d(a["00080018"])};if("petIsotopeModule"===e){var f=d(a["00540016"]);if(void 0===f)return;return{radiopharmaceuticalInfo:{radiopharmaceuticalStartTime:r.parseTM(d(f["00181072"],0,"")),radionuclideTotalDose:p(f["00181074"]),radionuclideHalfLife:p(f["00181075"])}}}}};function D(e,t,r){if(r+e.length>t.length)return!1;for(var a=r,n=0;n<e.length;n++)if(e[n]!==t[a++])return!1;return!0}var I=function(e,t,r){r=r||0;for(var a=function(e){for(var t=new Uint8Array(e.length),r=0,a=e.length;r<a;r++)t[r]=e.charCodeAt(r);return t}(t),n=r;n<e.length;n++)if(a[0]===e[n]&&D(a,e,n))return n;return-1},T={beforeSend:function(){},imageCreated:function(){},strict:!1,useWebWorkers:!0,decodeConfig:{usePDFJS:!1}};function C(e){T=Object.assign(T,e)}function k(){return T}var A=function(o,i){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},l=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},s=fe.cornerstone,u=k();return new Promise(function(t,r){var a=new XMLHttpRequest;a.open("get",o,!0),a.responseType="arraybuffer",u.beforeSend(a,i,n,l),Object.keys(n).forEach(function(e){a.setRequestHeader(e,n[e])}),l.deferred={resolve:t,reject:r},l.url=o,l.imageId=i,a.onloadstart=function(e){u.onloadstart&&u.onloadstart(e,l);var t={url:o,imageId:i};s.triggerEvent(s.events,"cornerstoneimageloadstart",t)},a.onloadend=function(e){u.onloadend&&u.onloadend(e,l);var t={url:o,imageId:i};s.triggerEvent(s.events,"cornerstoneimageloadend",t)},a.onreadystatechange=function(e){u.onreadystatechange?u.onreadystatechange(e,l):4===a.readyState&&(200===a.status?t(a.response,a):r(a))},a.onprogress=function(e){var t,r,a=e.loaded;e.lengthComputable&&(t=e.total,r=Math.round(a/t*100)),u.onprogress&&u.onprogress(e,l);var n={url:o,imageId:i,loaded:a,total:t,percentComplete:r};s.triggerEvent(s.events,"cornerstoneimageloadprogress",n)},a.send()})},L={xhrRequest:A,setOptions:C,getOptions:k};var S=function(e,t){var r={accept:2<arguments.length&&void 0!==arguments[2]?arguments[2]:"application/octet-stream"};return new Promise(function(s,u){A(e,t,r).then(function(e){var t=new Uint8Array(e),r=I(t,"\r\n\r\n");-1===r&&u(new Error("invalid response - no multipart mime header"));var a=function(e,t,r){t=t||0,r=r||e.length-t;for(var a="",n=t;n<t+r;n++)a+=String.fromCharCode(e[n]);return a}(t,0,r).split("\r\n"),n=function(e){for(var t=0;t<e.length;t++)if("--"===e[t].substr(0,2))return e[t]}(a);n||u(new Error("invalid response - no boundary marker"));var o=r+4,i=I(t,n,o);-1===i&&u(new Error("invalid response - terminating boundary not found"));var l=i-o-2;s({contentType:function(e){for(var t=0;t<e.length;t++)if("Content-Type:"===e[t].substr(0,13))return e[t].substr(13).trim()}(a),imageFrame:{pixelData:new Uint8Array(e,o,l)}})})})};var E,O=function(e){var t=fe.cornerstone.metaData.get("imagePixelModule",e);return{samplesPerPixel:t.samplesPerPixel,photometricInterpretation:t.photometricInterpretation,planarConfiguration:t.planarConfiguration,rows:t.rows,columns:t.columns,bitsAllocated:t.bitsAllocated,bitsStored:t.bitsStored,pixelRepresentation:t.pixelRepresentation,smallestPixelValue:t.smallestPixelValue,largestPixelValue:t.largestPixelValue,redPaletteColorLookupTableDescriptor:t.redPaletteColorLookupTableDescriptor,greenPaletteColorLookupTableDescriptor:t.greenPaletteColorLookupTableDescriptor,bluePaletteColorLookupTableDescriptor:t.bluePaletteColorLookupTableDescriptor,redPaletteColorLookupTableData:t.redPaletteColorLookupTableData,greenPaletteColorLookupTableData:t.greenPaletteColorLookupTableData,bluePaletteColorLookupTableData:t.bluePaletteColorLookupTableData,pixelData:void 0}},M=0,B=[],R=[],_=k(),W={maxWebWorkers:navigator.hardwareConcurrency||1,startWebWorkersOnDemand:!0,webWorkerPath:"../../dist/cornerstoneWADOImageLoaderWebWorker.js",webWorkerTaskPaths:[],taskConfiguration:{decodeTask:{loadCodecsOnStartup:!0,initializeCodecsOnStartup:!1,codecsPath:"../dist/cornerstoneWADOImageLoaderCodecs.js",usePDFJS:!1,strict:_.strict}}},U={maxWebWorkers:0,numWebWorkers:0,numTasksQueued:0,numTasksExecuting:0,numTasksCompleted:0,totalTaskTimeInMS:0,totalTimeDelayedInMS:0};function V(){if(B.length){for(var e=0;e<R.length;e++)if("ready"===R[e].status){R[e].status="busy";var t=B.shift();t.start=(new Date).getTime();var r=(new Date).getTime();return U.totalTimeDelayedInMS+=r-t.added,R[e].task=t,R[e].worker.postMessage({taskType:t.taskType,workerIndex:e,data:t.data},t.transferList),void U.numTasksExecuting++}R.length<E.maxWebWorkers&&j()}}function F(e){if("initialize"===e.data.taskType)R[e.data.workerIndex].status="ready",V();else{var t=R[e.data.workerIndex].task.start;R[e.data.workerIndex].task.deferred.resolve(e.data.result),R[e.data.workerIndex].task=void 0,U.numTasksExecuting--,R[e.data.workerIndex].status="ready",U.numTasksCompleted++;var r=(new Date).getTime();U.totalTaskTimeInMS+=r-t,V()}}function j(){if(!(R.length>=E.maxWebWorkers)){var e=new Worker(E.webWorkerPath);R.push({worker:e,status:"initializing"}),e.addEventListener("message",F),e.postMessage({taskType:"initialize",workerIndex:R.length-1,config:E})}}function G(e){if(e=e||W,E)throw new Error("WebWorkerManager already initialized");if((E=e).maxWebWorkers=E.maxWebWorkers||navigator.hardwareConcurrency||1,!E.startWebWorkersOnDemand)for(var t=0;t<E.maxWebWorkers;t++)j()}var J={initialize:G,loadWebWorkerTask:function(e,t){E.webWorkerTaskPaths.push(e),t&&(E.taskConfiguration=Object.assign(E.taskConfiguration,t));for(var r=0;r<R.length;r++)R[r].worker.postMessage({taskType:"loadWebWorkerTask",workerIndex:R.length-1,sourcePath:e,config:E})},addTask:function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,a=3<arguments.length?arguments[3]:void 0;E||G();var n,o={},i=new Promise(function(e,t){o={resolve:e,reject:t}});for(n=0;n<B.length&&!(B[n].priority<r);n++);var l=M++;return B.splice(n,0,{taskId:l,taskType:e,status:"ready",added:(new Date).getTime(),data:t,deferred:o,priority:r,transferList:a}),V(),{taskId:l,promise:i}},getStatistics:function(){return U.maxWebWorkers=E.maxWebWorkers,U.numWebWorkers=R.length,U.numTasksQueued=B.length,U},setTaskPriority:function(e){for(var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,r=0;r<B.length;r++)if(B[r].taskId===e){var a=B.splice(r,1)[0];for(a.priority=t,r=0;r<B.length&&!(B[r].priority<t);r++);return B.splice(r,0,a),!0}return!1},cancelTask:function(e,t){for(var r=0;r<B.length;r++)if(B[r].taskId===e)return B.splice(r,1).deferred.reject(t),!0;return!1}},z=r(0);function q(e){return function(t){var r;try{return decodeURIComponent(escape(t))}catch(e){if((r=e)instanceof URIError)return t;throw r}}(String.fromCharCode.apply(null,Array.prototype.slice.apply(new Uint8Array(e))))}var Y=function(i,e,l){var s=(new Date).getTime(),r=new Blob([e],{type:"image/jpeg"});return new Promise(function(o,t){var e=new FileReader;void 0===e.readAsBinaryString?e.readAsArrayBuffer(r):e.readAsBinaryString(r),e.onload=function(){var n=new Image;n.onload=function(){l.height=n.height,l.width=n.width,i.rows=n.height,i.columns=n.width;var e=l.getContext("2d");e.drawImage(this,0,0);var t=e.getImageData(0,0,n.width,n.height),r=(new Date).getTime();i.pixelData=t.data,i.imageData=t,i.decodeTimeInMS=r-s;var a=Object(z.a)(i.pixelData);i.smallestPixelValue=a.min,i.largestPixelValue=a.max,o(i)},n.onerror=function(e){t(e)},void 0===e.readAsBinaryString?n.src="data:image/jpeg;base64,".concat(window.btoa(q(e.result))):n.src="data:image/jpeg;base64,".concat(window.btoa(e.result))},e.onerror=function(e){t(e)}})},N=r(5),H=r(4),K=r(2),Q=r(1),X=!1;function Z(n,o,i,l){var e=l.priority||void 0,t=l.transferPixelData?[i.buffer]:void 0,r=k(),s=r.strict,u=r.decodeConfig;return!1===r.useWebWorkers?(!1===X&&(Object(K.b)(u),Object(Q.b)(u),X=!0),new Promise(function(e,t){try{var r=[n,o,i,u,l],a=N.a.apply(void 0,r);Object(H.a)(a,s),e(a)}catch(e){t(e)}})):J.addTask("decodeTask",{imageFrame:n,transferSyntax:o,pixelData:i,options:l},e,t).promise}var $=function(e,r,t,a){var n=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{};return"1.2.840.10008.1.2"===r?Z(e,r,t,n):"1.2.840.10008.1.2.1"===r?Z(e,r,t,n):"1.2.840.10008.1.2.2"===r?Z(e,r,t,n):"1.2.840.10008.1.2.1.99"===r?Z(e,r,t,n):"1.2.840.10008.1.2.5"===r?Z(e,r,t,n):"1.2.840.10008.1.2.4.50"===r?8!==e.bitsAllocated||3!==e.samplesPerPixel&&4!==e.samplesPerPixel?Z(e,r,t,n):Y(e,t,a):"1.2.840.10008.1.2.4.51"===r?Z(e,r,t,n):"1.2.840.10008.1.2.4.57"===r?Z(e,r,t,n):"1.2.840.10008.1.2.4.70"===r?Z(e,r,t,n):"1.2.840.10008.1.2.4.80"===r?Z(e,r,t,n):"1.2.840.10008.1.2.4.81"===r?Z(e,r,t,n):"1.2.840.10008.1.2.4.90"===r?Z(e,r,t,n):"1.2.840.10008.1.2.4.91"===r?Z(e,r,t,n):new Promise(function(e,t){t(new Error("No decoder for transfer syntax ".concat(r)))})},ee=function(e){return"RGB"===e||"PALETTE COLOR"===e||"YBR_FULL"===e||"YBR_FULL_422"===e||"YBR_PARTIAL_422"===e||"YBR_PARTIAL_420"===e||"YBR_RCT"===e||"YBR_ICT"===e};function te(e,t){0===e.planarConfiguration?a(e.pixelData,t):n(e.pixelData,t)}function re(e,t){var r,a,n=t.data;if("RGB"===e.photometricInterpretation)te(e,n);else if("YBR_RCT"===e.photometricInterpretation)te(e,n);else if("YBR_ICT"===e.photometricInterpretation)te(e,n);else if("PALETTE COLOR"===e.photometricInterpretation)l(e,n);else if("YBR_FULL_422"===e.photometricInterpretation)te(e,n);else{if("YBR_FULL"!==e.photometricInterpretation)throw new Error("No color space conversion for photometric interpretation ".concat(e.photometricInterpretation));a=n,0===(r=e).planarConfiguration?o(r.pixelData,a):i(r.pixelData,a)}}var ae=function(e,t){if(t=t||e.transferSyntax,8===e.bitsAllocated&&"1.2.840.10008.1.2.4.50"===t&&(3===e.samplesPerPixel||4===e.samplesPerPixel))return!0},ne="";var oe=function(v,e,x,t){if(!e||!e.length)return Promise.reject(new Error("The file does not contain image data."));var h=fe.cornerstone,w=document.createElement("canvas"),r=O(v),a=$(r,x,e,w,t);return new Promise(function(g,e){a.then(function(e){var t,r=h.metaData.get("imagePlaneModule",v)||{},a=h.metaData.get("voiLutModule",v)||{},n=h.metaData.get("modalityLutModule",v)||{},o=h.metaData.get("sopCommonModule",v)||{},i=ee(e.photometricInterpretation);if(!ae(e,x)&&(32===(t=e).bitsAllocated?t.pixelData=new Float32Array(t.pixelData):16===t.bitsAllocated?0===t.pixelRepresentation?t.pixelData=new Uint16Array(t.pixelData):t.pixelData=new Int16Array(t.pixelData):t.pixelData=new Uint8Array(t.pixelData),i)){w.height=e.rows,w.width=e.columns;var l=w.getContext("2d").createImageData(e.columns,e.rows);re(e,l),e.imageData=l,e.pixelData=l.data;var s=Object(z.a)(e.pixelData);e.smallestPixelValue=s.min,e.largestPixelValue=s.max}var u,c={imageId:v,color:i,columnPixelSpacing:r.columnPixelSpacing,columns:e.columns,height:e.rows,intercept:n.rescaleIntercept?n.rescaleIntercept:0,invert:"MONOCHROME1"===e.photometricInterpretation,minPixelValue:e.smallestPixelValue,maxPixelValue:e.largestPixelValue,rowPixelSpacing:r.rowPixelSpacing,rows:e.rows,sizeInBytes:e.pixelData.length,slope:n.rescaleSlope?n.rescaleSlope:1,width:e.columns,windowCenter:a.windowCenter?a.windowCenter[0]:void 0,windowWidth:a.windowWidth?a.windowWidth[0]:void 0,decodeTimeInMS:e.decodeTimeInMS,floatPixelData:void 0};if(e.pixelData instanceof Float32Array){var f=e.pixelData,d=function(e){for(var t=Object(z.a)(e),r=Math.abs(t.max-t.min)/65535,a=t.min,n=e.length,o=new Uint16Array(n),i=65535,l=0,s=0;s<n;s++){var u=Math.floor((e[s]-a)/r);o[s]=u,i=Math.min(i,u),l=Math.max(l,u)}return{min:i,max:l,intPixelData:o,slope:r,intercept:a}}(f);c.minPixelValue=d.min,c.maxPixelValue=d.max,c.slope=d.slope,c.intercept=d.intercept,c.floatPixelData=f,c.getPixelData=function(){return d.intPixelData}}else c.getPixelData=function(){return e.pixelData};if(c.color&&(c.getCanvas=function(){return ne===v||(w.height=c.rows,w.width=c.columns,w.getContext("2d").putImageData(e.imageData,0,0),ne=v),w}),n.modalityLUTSequence&&0<n.modalityLUTSequence.length&&"1.2.840.10008.5.1.4.1.1.12.1"!==(u=o.sopClassUID)&&"1.2.840.10008.5.1.4.1.1.12.2.1"!==u&&(c.modalityLUT=n.modalityLUTSequence[0]),a.voiLUTSequence&&0<a.voiLUTSequence.length&&(c.voiLUT=a.voiLUTSequence[0]),c.color&&(c.windowWidth=255,c.windowCenter=127),void 0===c.windowCenter||void 0===c.windowWidth){var p=c.maxPixelValue*c.slope+c.intercept,m=c.minPixelValue*c.slope+c.intercept;c.windowWidth=p-m,c.windowCenter=(p+m)/2}g(c)},e)})};var ie=function(o,i){var l=(new Date).getTime(),t=o.substring(7);return{promise:new Promise(function(a,n){if(void 0===y.get(o)){var e=new Error("no metadata for imageId ".concat(o));return n(e)}S(t,o,'multipart/related; type="application/octet-stream"').then(function(e){var t=function(e){var t="1.2.840.10008.1.2";if(!e)return t;var r=e.split(";"),a={};r.forEach(function(e){var t=e.split("=");if(2===t.length){var r=t[1].trim().replace(/"/g,"");a[t[0].trim()]=r}});var n={"image/jpeg":"1.2.840.10008.1.2.4.70","image/x-dicom-rle":"1.2.840.10008.1.2.5","image/x-jls":"1.2.840.10008.1.2.4.80","image/jp2":"1.2.840.10008.1.2.4.90","image/jpx":"1.2.840.10008.1.2.4.92"};return a["transfer-syntax"]?a["transfer-syntax"]:e&&!Object.keys(a).length&&n[e]?n[e]:a.type&&n[a.type]?n[a.type]:t}(e.contentType),r=e.imageFrame.pixelData;oe(o,r,t,i).then(function(e){var t=(new Date).getTime();e.loadTimeInMS=t-l,a(e)},n)},n)}),cancelFn:void 0}},le={metaData:{getNumberString:f,getNumberValue:p,getNumberValues:m,getValue:d,metaDataProvider:P},findIndexOfString:I,getPixelData:S,loadImage:ie,metaDataManager:y,register:function(e){e.registerImageLoader("wadors",ie),e.metaData.addProvider(P)}};var se,ue,ce=function(e){le.register(e),Le.register(e)},fe={set cornerstone(e){ce(se=e)},get cornerstone(){if(!se){if(!window||!window.cornerstone)throw new Error("cornerstoneWADOImageLoader requires a copy of Cornerstone to work properly. Please add cornerstoneWADOImageLoader.external.cornerstone = cornerstone; to your application.");se=window.cornerstone,ce(se)}return se},set dicomParser(e){ue=e},get dicomParser(){if(!ue){if(!window||!window.dicomParser)throw new Error("cornerstoneWADOImageLoader requires a copy of dicomParser to work properly. Please add cornerstoneWADOImageLoader.external.dicomParser = dicomParser; to your application.");ue=window.dicomParser}return ue}};var de=function(e){var t,r=e.indexOf(":"),a=e.substring(r+1),n=a.indexOf("frame=");if(-1!==n){var o=a.substr(n+6);t=parseInt(o,10),a=a.substr(0,n-1)}return{scheme:e.substr(0,r),url:a,frame:t}},pe=0,me={},ge={};function ve(){return{cacheSizeInBytes:pe,numberOfDataSetsCached:Object.keys(me).length}}var xe={isLoaded:function(e){return void 0!==me[e]},load:function(o){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:A,t=2<arguments.length?arguments[2]:void 0,i=fe.cornerstone,l=fe.dicomParser;if(me[o])return new Promise(function(e){me[o].cacheCount++,e(me[o].dataSet)});if(ge[o])return ge[o].cacheCount++,ge[o];var r=e(o,t),s=new Promise(function(a,n){r.then(function(e){var t,r=new Uint8Array(e);try{t=l.parseDicom(r)}catch(e){return n(e)}me[o]={dataSet:t,cacheCount:s.cacheCount},pe+=t.byteArray.length,a(t),i.triggerEvent(i.events,"datasetscachechanged",{uri:o,action:"loaded",cacheInfo:ve()})},n).then(function(){delete ge[o]},function(){delete ge[o]})});return s.cacheCount=1,ge[o]=s},unload:function(e){var t=fe.cornerstone;me[e]&&(me[e].cacheCount--,0===me[e].cacheCount&&(pe-=me[e].dataSet.byteArray.length,delete me[e],t.triggerEvent(t.events,"datasetscachechanged",{uri:e,action:"unloaded",cacheInfo:ve()})))},getInfo:ve,purge:function(){me={},ge={}},get:function(e){if(me[e])return me[e].dataSet}};var he=function(e,t){var r=fe.dicomParser,a=de(t),n=xe.get(a.url);if(n){if("generalSeriesModule"===e)return{modality:n.string("x00080060"),seriesInstanceUID:n.string("x0020000e"),seriesNumber:n.intString("x00200011"),studyInstanceUID:n.string("x0020000d"),seriesDate:r.parseDA(n.string("x00080021")),seriesTime:r.parseTM(n.string("x00080031")||"")};if("patientStudyModule"===e)return{patientAge:n.intString("x00101010"),patientSize:n.floatString("x00101020"),patientWeight:n.floatString("x00101030")};if("imagePlaneModule"===e){var o=w(n,"x00200037",6),i=w(n,"x00200032",3),l=w(n,"x00280030",2),s=null,u=null;l&&(u=l[0],s=l[1]);var c=null,f=null;return o&&(c=[parseFloat(o[0]),parseFloat(o[1]),parseFloat(o[2])],f=[parseFloat(o[3]),parseFloat(o[4]),parseFloat(o[5])]),{frameOfReferenceUID:n.string("x00200052"),rows:n.uint16("x00280010"),columns:n.uint16("x00280011"),imageOrientationPatient:o,rowCosines:c,columnCosines:f,imagePositionPatient:i,sliceThickness:n.floatString("x00180050"),sliceLocation:n.floatString("x00201041"),pixelSpacing:l,rowPixelSpacing:u,columnPixelSpacing:s}}if("imagePixelModule"===e)return g(n);if("modalityLutModule"===e)return{rescaleIntercept:n.floatString("x00281052"),rescaleSlope:n.floatString("x00281053"),rescaleType:n.string("x00281054"),modalityLUTSequence:v(n.uint16("x00280103"),n.elements.x00283000)};if("voiLutModule"===e){var d=h(n);return{windowCenter:w(n,"x00281050",1),windowWidth:w(n,"x00281051",1),voiLUTSequence:v(d,n.elements.x00283010)}}if("sopCommonModule"===e)return{sopClassUID:n.string("x00080016"),sopInstanceUID:n.string("x00080018")};if("petIsotopeModule"===e){var p=n.elements.x00540016;if(void 0===p)return;var m=p.items[0].dataSet;return{radiopharmaceuticalInfo:{radiopharmaceuticalStartTime:r.parseTM(m.string("x00181072")||""),radionuclideTotalDose:m.floatString("x00181074"),radionuclideHalfLife:m.floatString("x00181075")}}}}},we=[];var be={add:function(e){var t=we.push(e);return"dicomfile:".concat(t-1)},get:function(e){return we[e]},remove:function(e){we[e]=void 0},purge:function(){we=[]}};function ye(e,t){var r,a=fe.dicomParser;if(e.elements.x7fe00010&&e.elements.x7fe00010.basicOffsetTable.length)return a.readEncapsulatedImageFrame(e,e.elements.x7fe00010,t);if((r=e).intString("x00280008")===r.elements.x7fe00010.fragments.length)return a.readEncapsulatedPixelDataFromFragments(e,e.elements.x7fe00010,t);var n=a.createJPEGBasicOffsetTable(e,e.elements.x7fe00010);return a.readEncapsulatedImageFrame(e,e.elements.x7fe00010,t,n)}var Pe=function(e,t,r){for(var a=new Uint8Array(r),n=0;n<r;n++){var o=e[Math.floor(n/8)+t],i=n%8;a[n]=o&1<<i?1:0}return a};var De=function(e,t){var r,a=e.elements.x7fe00010||e.elements.x7fe00008,n=e.uint16("x00280100"),o=e.uint16("x00280010"),i=e.uint16("x00280011"),l=e.uint16("x00280002"),s=a.dataOffset,u=o*i*l;if(8===n){if((r=s+t*u)>=e.byteArray.length)throw new Error("frame exceeds size of pixelData");return new Uint8Array(e.byteArray.buffer,r,u)}if(16===n){if((r=s+t*u*2)>=e.byteArray.length)throw new Error("frame exceeds size of pixelData");return new Uint8Array(e.byteArray.buffer,r,2*u)}if(1===n){if((r=s+t*u*.125)>=e.byteArray.length)throw new Error("frame exceeds size of pixelData");return Pe(e.byteArray,r,u)}if(32!==n)throw new Error("unsupported pixel format");if((r=s+t*u*4)>=e.byteArray.length)throw new Error("frame exceeds size of pixelData");return new Uint8Array(e.byteArray.buffer,r,4*u)};var Ie=function(e){var t=de(e),r=parseInt(t.url,10),a=be.get(r);return new Promise(function(r,e){var t=new FileReader;t.onload=function(e){var t=e.target.result;r(t)},t.onerror=e,t.readAsArrayBuffer(a)})};var Te=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,r=e.elements.x7fe00010||e.elements.x7fe00008;return r?r.encapsulatedPixelData?ye(e,t):De(e,t):null};function Ce(e,s){var u=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,c=3<arguments.length?arguments[3]:void 0,f=4<arguments.length?arguments[4]:void 0,d=5<arguments.length?arguments[5]:void 0,p=(new Date).getTime(),m={cancelFn:void 0};return m.promise=new Promise(function(i,l){e.then(function(r){var t,e=Te(r,u),a=r.string("x00020010"),n=(new Date).getTime(),o=oe(s,e,a,f);t=s,m.decache=function(){var e=de(t);xe.unload(e.url)},o.then(function(e){e.data=r,e.sharedCacheKey=c;var t=(new Date).getTime();e.loadTimeInMS=n-p,e.totalTimeInMS=t-p,void 0!==d&&void 0!==d.imageDoneCallback&&d.imageDoneCallback(e),i(e)},function(e){l({error:e,dataSet:r})})},function(e){l({error:e})})}),m}function ke(e){return"dicomweb"===e||"wadouri"===e?A:"dicomfile"===e?Ie:void 0}function Ae(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=de(e),a=(t=Object.assign({},t)).loader;return void 0===a?a=ke(r.scheme):delete t.loader,xe.isLoaded(r.url)?function(i,l){var s=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,u=3<arguments.length?arguments[3]:void 0,c=4<arguments.length?arguments[4]:void 0,f=(new Date).getTime();return{promise:new Promise(function(r,t){var e,a=(new Date).getTime();try{var n=Te(i,s),o=i.string("x00020010");e=oe(l,n,o,c)}catch(e){return void t({error:e,dataSet:i})}e.then(function(e){e.data=i,e.sharedCacheKey=u;var t=(new Date).getTime();e.loadTimeInMS=a-f,e.totalTimeInMS=t-f,r(e)},t)}),cancelFn:void 0}}(xe.get(r.url,a,e),e,r.frame,r.url,t):Ce(xe.load(r.url,a,e),e,r.frame,r.url,t)}var Le={metaData:{getImagePixelModule:g,getLUTs:v,getModalityLUTOutputPixelRepresentation:h,getNumberValues:w,metaDataProvider:he},dataSetCacheManager:xe,fileManager:be,getEncapsulatedImageFrame:ye,getUncompressedImageFrame:De,loadFileRequest:Ie,loadImageFromPromise:Ce,getLoaderForScheme:ke,loadImage:Ae,parseImageId:de,unpackBinaryFrame:Pe,register:function(e){e.registerImageLoader("dicomweb",Ae),e.registerImageLoader("wadouri",Ae),e.registerImageLoader("dicomfile",Ae),e.metaData.addProvider(he)}};var Se=function(e){C(e)},Ee=r(3);r.d(t,"convertRGBColorByPixel",function(){return a}),r.d(t,"convertRGBColorByPlane",function(){return n}),r.d(t,"convertYBRFullByPixel",function(){return o}),r.d(t,"convertYBRFullByPlane",function(){return i}),r.d(t,"convertPALETTECOLOR",function(){return l}),r.d(t,"wadouri",function(){return Le}),r.d(t,"wadors",function(){return le}),r.d(t,"configure",function(){return Se}),r.d(t,"convertColorSpace",function(){return re}),r.d(t,"createImage",function(){return oe}),r.d(t,"decodeImageFrame",function(){return $}),r.d(t,"decodeJPEGBaseline8BitColor",function(){return Y}),r.d(t,"getImageFrame",function(){return O}),r.d(t,"getMinMax",function(){return z.a}),r.d(t,"isColorImage",function(){return ee}),r.d(t,"isJPEGBaseline8BitColor",function(){return ae}),r.d(t,"webWorkerManager",function(){return J}),r.d(t,"version",function(){return Ee.a}),r.d(t,"internal",function(){return L}),r.d(t,"external",function(){return fe});var Oe={convertRGBColorByPixel:a,convertRGBColorByPlane:n,convertYBRFullByPixel:o,convertYBRFullByPlane:i,convertPALETTECOLOR:l,wadouri:Le,wadors:le,configure:Se,convertColorSpace:re,createImage:oe,decodeImageFrame:$,decodeJPEGBaseline8BitColor:Y,getImageFrame:O,getMinMax:z.a,isColorImage:ee,isJPEGBaseline8BitColor:ae,webWorkerManager:J,version:Ee.a,internal:L,external:fe};t.default=Oe}])});
//# sourceMappingURL=cornerstoneWADOImageLoader.min.js.map

  return {
    min: min,
    max: max
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getMinMax);

/***/ }),

/***/ "./version.js":
/*!********************!*\
  !*** ./version.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('2.2.2');

/***/ })

/******/ });
});
//# sourceMappingURL=cornerstoneWADOImageLoader.js.map
