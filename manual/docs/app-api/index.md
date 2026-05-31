---
title: App Built-in API
description: Local HTTP API contract for automation against the running GranoFlow App.
---

This section documents the **GranoFlow App built-in local HTTP API**.

## Scope

- Contract source: `granoflow-docs/manual/docs/app-api/granoflow-local-http-api.openapi.yaml`
- Audience: automation users integrating with the running Granoflow App process
- Language policy: **OpenAPI/Swagger contract is English-only**
- Public Swagger UI: [https://granoflow.com/api/](https://granoflow.com/api/)

## Notes

- This API is not `granoflow-core-api`.
- Default endpoint uses loopback `127.0.0.1:56789` with a configurable port.
- If you change the port, restart Granoflow to apply the new binding.
