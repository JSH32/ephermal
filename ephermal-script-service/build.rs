fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_client(false)
        .type_attribute(
            "script_service.Script",
            "#[derive(serde::Serialize, serde::Deserialize)]",
        )
        .type_attribute(
            "bundle.Bundle",
            "#[derive(serde::Serialize, serde::Deserialize)]",
        )
        .type_attribute(
            "bundle.File",
            "#[derive(serde::Serialize, serde::Deserialize)]",
        )
        .type_attribute(
            "script_service.Revision",
            "#[derive(serde::Serialize, serde::Deserialize)]",
        )
        .compile(
            &[
                "../protobufs/shared/bundle.proto",
                "../protobufs/script_service.proto",
            ],
            &["../"],
        )
        .unwrap();
    Ok(())
}
