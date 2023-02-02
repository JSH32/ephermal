---Script metadata and info.
---@class ScriptInfo
---@field identifier string Globally unique public script identifier.
script = {}

---@alias Event
---| "fetch" # HTTP fetch event.

---Add an event listener to the global listeners table.
---@param event Event event to listen to, this will replace the existing listener.
---@overload fun(url: "fetch", callback: fun(request: Request): Response)
function add_event_listener(event, callback) end
