# AI Power Translator Privacy Policy

Last Updated: October 19, 2026

Languages: English |
[简体中文](https://granoflow.github.io/granoflow-docs/ai-power-translator-privacy-policy.zh-CN.html)
| [繁體中文（香港）](https://granoflow.github.io/granoflow-docs/ai-power-translator-privacy-policy.zh-HK.html)
| [繁體中文（台灣）](https://granoflow.github.io/granoflow-docs/ai-power-translator-privacy-policy.zh-TW.html)

This Privacy Policy applies to the **AI Power Translator** browser extension (including Chrome and Microsoft Edge)
(the "Extension"). The Extension is operated by **A New Zero Innovations
Limited (Hong Kong)** ("we," "us," or "our").

This is a product-specific policy. The
[Granoflow Privacy Policy](https://granoflow.github.io/granoflow-docs/privacy-policy.html)
applies to Granoflow services that you separately choose to use.

## 1. The Extension's Single Purpose

The Extension helps you read and work with webpage content by translating,
explaining, and discussing text, translating readable page text alongside the
original, translating images and online or local PDFs, generating optional reading cards, and sending cards to a Granoflow
instance when you choose to do so.

The Extension handles webpage content and related information only as needed
to provide these user-facing features. It does not use this information for
advertising, credit decisions, data brokerage, or unrelated profiling.

## 2. Information the Extension Handles

### 2.1 Webpage content and current-page information

Depending on the action you choose, the Extension may handle:

- Text you select on a webpage
- Images you ask to translate and text or images from online or local PDF files
- The surrounding paragraph and adjacent text needed to understand a
  selection
- Readable text from the current page when you request full-page translation
  or explanation
- The current page title, URL, and domain
- Your follow-up questions and the preceding conversation needed to answer
  them
- Translations, explanations, and reading-card content generated from that
  material

The Extension does not access your Chrome browsing-history database or create
a history of every page you visit. It uses the current page URL and content
only for the feature you invoke, local cache identity, source attribution, and
optional Granoflow card delivery.

### 2.2 Settings and authentication information

The Extension may store the settings you enter, including:

- Target language and display preferences
- AI API endpoint, model name, and API key
- Automatically detected API protocol information
- Granoflow address and optional Granoflow API token

These settings are stored in `chrome.storage.local` in your Chrome profile.
They are not stored by us on a developer-operated server. The Extension does
not add its own encryption layer to this local storage.

An AI API key is sent only to the AI endpoint you configured, as required to
authenticate your request. A Granoflow token is sent only to the Granoflow
address you configured.

### 2.3 Clipboard

The Extension writes text to the clipboard only when you choose a copy action.
It does not request permission to read the clipboard.

### 2.4 Information we do not collect through the Extension

The Extension does not include advertising tracking, crash reporting, or a
developer-operated AI proxy. Product usage statistics are described below. It does not ask
you to create an Extension account. We do not receive your webpage content,
prompts, API keys, or locally cached results merely because you install or use
the Extension.

Google may provide publishers with aggregate Chrome Web Store statistics under
Google's own terms. Those store statistics do not give us the webpage content
processed by the Extension.

### 2.5 Product usage statistics (Firebase)

Usage statistics are enabled by default on installation and after each Extension
upgrade. You can turn them off in General settings without disabling translation.
Turning them off stops automatic collection, clears queued events, and cancels
in-flight sending. They remain off until the next installation or upgrade,
which enables them again.

When enabled, the Extension sends its daily first-translation count, displays
and clicks of promotions inside the Extension, normalized model source,
selection and call categories, and available numeric token totals to a
product-specific Firebase project. Common fields include browser name and major
version, Extension version, local calendar date, protocol version, and a fresh
random batch ID per upload. Batch IDs are not reused as user or installation IDs.
Model-language discrepancy reports, where accepted by the receiving service,
contain controlled profile IDs/versions, normalized provider/model categories,
purpose, source/target language codes, and discrepancy categories.

These events do not contain page text, images, PDFs, prompts, API keys, custom
endpoints, private model names, original configuration or error text, or a full
User-Agent. This uses Firestore REST, not Firebase Analytics, advertising
tracking, an automatic webpage-collection SDK, or an anonymous-login user ID.
It does not associate identities across sites or products and is not used for
personalized advertising. The Extension does not collect or write IP addresses
into these events; Google infrastructure may process connection information
such as IP addresses under [Firebase's privacy practices](https://firebase.google.com/support/privacy).

Maintenance is designed to aggregate raw records older than 30 days into daily
summaries and delete the raw records, then delete daily summaries older than
12 months. Maintenance runs from a developer-operated computer and may be
delayed by that computer being offline, an unmounted drive, expired login, or
service unavailability; deletion exactly on day 30 is not guaranteed. Google
infrastructure logs are governed by Google's policies. Because there is no
persistent installation identity, already submitted events cannot be retrieved
by an installation ID. The website-improvement link opens the author's X profile;
it does not automatically submit the current website or its content to Firebase.

## 3. Where Processing Takes Place

### 3.1 Browser-managed on-device AI

When you select browser-managed on-device AI and it is available in your
browser, text is processed by that browser's on-device model. An initial model
download may be managed by the browser, but the Extension does not send your prompt or webpage content to
our server for this processing.

Browser software and services are governed by the respective browser vendor's terms and privacy policy.

### 3.2 An AI provider you configure

When you select a custom AI API, the Extension sends the information needed
for the requested feature directly to the endpoint you configured. Depending
on the action, this can include selected text, surrounding context, current
page URL, page title, readable page text, follow-up questions, earlier
conversation messages, images requested for translation, PDF text or images
needed for the selected feature, and generated results used to create cards.

The provider may also receive ordinary network information, such as your IP
address and request metadata. Its retention, model-training, logging, and
security practices are governed by its own terms and privacy policy. Review
those terms before configuring the provider, and do not submit information you
do not want that provider to process.

Remote API endpoints should use HTTPS. If you configure another scheme, the
Extension uses the address you supplied. Plain HTTP should be limited to a
loopback or other local service that does not send the data across the public
internet.

### 3.3 Granoflow

Sending cards to Granoflow is optional and requires your action. When you
choose **Send to Granoflow**, the Extension may send the selected cards,
source text, translation or explanation, source URL, note title, and related
section text to the Granoflow address you configured.

The default address is a loopback address on your own computer. If you replace
it with another address, data is sent to that destination under the security
and privacy practices of that Granoflow instance. The settings page may also
make limited connection-check requests to the configured Granoflow address;
those checks do not include webpage content.

The Extension does not send generated cards to Granoflow automatically.

## 4. Local Storage and Retention

The Extension uses `chrome.storage.local` to provide settings, caching, card
display, and delivery:

- Translation, explanation, and generated-card cache entries are reused for
  up to 72 hours.
- The 72-hour period is a cache-validity period, not a guaranteed deletion
  deadline. Expired entries may remain locally until they are replaced,
  removed by the cache-size limit, cleared from the Chrome profile, or the
  Extension is uninstalled.
- Locally generated note and card records may remain until Extension storage
  is cleared or the Extension is uninstalled.
- Settings, API keys, endpoint information, and Granoflow connection settings
  remain until you change them, clear Extension storage, or uninstall the
  Extension.
- Conversation context is kept in the active Extension interface for the
  conversation and is not intentionally added to a separate long-term
  conversation-history service operated by us.

Clearing ordinary webpage cookies or browser history may not clear Extension
storage. You can remove locally stored Extension data by clearing the
Extension's storage through Chrome or uninstalling the Extension.

Content already sent to an AI provider or a non-local Granoflow instance is
subject to that recipient's retention and deletion practices.

## 5. Chrome Permissions

The Extension requests the following permissions for its disclosed features:

- **Website access (`<all_urls>`)**: displays the selection toolbar, reads text
  you ask it to translate or explain, inserts full-page translations, obtains
  current-page source information, and connects to user-configured AI and
  Granoflow endpoints.
- **`activeTab`**: supports actions involving the active page.
- **`storage`**: stores settings, local credentials, protocol hints, cached
  results, and generated card information in the Chrome profile.
- **`clipboardWrite`**: copies text only after you choose a copy action.

The Extension does not request access to Chrome browsing history, bookmarks,
contacts, precise location, camera, or microphone.

## 6. Sharing and Disclosure

The Extension transfers information only:

- To Firebase for the product usage statistics described in Section 2.5 when enabled

- To the AI provider you configured, when needed to perform your requested
  translation, explanation, conversation, or card-generation feature
- To the Granoflow address you configured, when you request a connection test
  or choose to send cards
- When required to comply with applicable law or to protect against malware,
  spam, fraud, or abuse
- As part of a merger, acquisition, or sale of assets, only in accordance with
  applicable requirements, including any required prior consent

We do not sell or rent Extension user data. We do not transfer or use it for
personalized, retargeted, or interest-based advertising, data brokerage,
creditworthiness, or lending.

We do not allow humans to read Extension user data except where you give
specific consent for support, where necessary for security, where required by
law, or where data has been aggregated and anonymized for permitted internal
operations. Because the Extension does not send webpage content to our server
by default, we ordinarily have no such content to review.

## 7. Chrome Web Store Limited Use

The use of information received from Google APIs will adhere to the
[Chrome Web Store User Data Policy](https://developer.chrome.com/docs/webstore/program-policies/policies#userdata),
including the Limited Use requirements.

In particular, information obtained through Chrome permissions is used only
to provide or improve the Extension's disclosed single purpose and is not used
for prohibited advertising, data sales, or unrelated purposes.

## 8. Security

We design the Extension to minimize developer access by processing data in the
browser or sending it directly to destinations you configure. You are
responsible for protecting your Chrome profile, API keys, and configured
services.

Use HTTPS for remote AI endpoints, keep API credentials confidential, and
avoid translating or explaining sensitive information unless you trust the
selected processing method and provider. No method of storage or transmission
is completely secure.

## 9. Your Choices and Privacy Requests

You can:

- Turn off usage statistics in General settings; an installation or upgrade enables them again

- Use Chrome built-in AI where available instead of a remote provider
- Choose which AI provider and Granoflow instance, if any, to configure
- Avoid invoking a feature on sensitive content
- Change or remove stored API keys and endpoints
- Choose whether to send cards to Granoflow
- Clear Extension storage or uninstall the Extension

For data already sent to a provider you selected, direct access, correction,
or deletion requests to that provider. For information controlled by us,
contact [granoflow@anz.tv](mailto:granoflow@anz.tv). Do not post API keys,
private webpage content, or other sensitive personal information in public
GitHub issues.

## 10. Children

The Extension is not directed to children. If you are below the age at which
you can validly consent to the processing described in this policy under
applicable law, use the Extension only with the involvement or permission of a
parent or guardian where required.

## 11. Changes to This Policy

We may update this policy to reflect changes to the Extension, Chrome Web Store
requirements, or applicable law. If an update materially changes how the
Extension handles user data, we will provide notice through an appropriate
channel and update the date above.

## 12. Contact

For privacy questions or requests:

- Email: [granoflow@anz.tv](mailto:granoflow@anz.tv)
- Public product feedback only:
  [Granoflow Docs Issues](https://github.com/granoflow/granoflow-docs/issues)

**Operator / Controller:** A New Zero Innovations Limited (Hong Kong)
