use ephermal_common::config::{dotenv, get_env, get_env_or};

pub struct Config {
    pub port: u16,
    pub script_service_uri: String,
}

impl Config {
    pub fn new() -> Self {
        dotenv().ok();

        Config {
            port: get_env_or("PORT", 3000),
            script_service_uri: get_env("SCRIPT_SERVICE_URI"),
        }
    }
}
