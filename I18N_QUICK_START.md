# Quick Start Guide - i18n

## For Developers

### Adding a New Translation Key

1. Add to English translation file (`src/locales/en/{namespace}.json`):
```json
{
  "myNewKey": "My new text"
}
```

2. Use in Astro component:
```astro
---
import { t, setDefaultNamespace } from 'i18next';
setDefaultNamespace('common');
---
<p>{t('myNewKey')}</p>
```

3. Use in React component:
```tsx
import { useTranslation } from '@/contexts/i18n-context';

function MyComponent() {
  const { t } = useTranslation('common');
  return <p>{t('myNewKey')}</p>;
}
```

4. Copy to all other language files and translate.

### Testing Locally

```bash
# Build the project
npm run build

# Preview the build
npm run preview

# Visit different languages:
# http://localhost:4321/       (English)
# http://localhost:4321/es     (Spanish)
# http://localhost:4321/fr     (French)
# etc.
```

### Translation Tips

**Dynamic values:**
```json
{
  "welcome": "Welcome, {{name}}!"
}
```
```tsx
t('welcome', { name: 'John' }) // "Welcome, John!"
```

**Pluralization:**
```json
{
  "items": "{{count}} item",
  "items_other": "{{count}} items"
}
```
```tsx
t('items', { count: 1 }) // "1 item"
t('items', { count: 5 }) // "5 items"
```

## For Translators

### Translation Files Location
`src/locales/{language-code}/`

### Files to Translate

1. **common.json** - Buttons, actions, general UI
2. **navigation.json** - Menu items
3. **sounds.json** - Sound controls and categories
4. **modals.json** - Dialog boxes and forms
5. **seo.json** - Page descriptions and about section

### Translation Guidelines

1. **Keep formatting**: Preserve `{{variables}}` exactly as shown
2. **Maintain meaning**: Translate the intent, not word-for-word
3. **Be concise**: Match the brevity of English where possible
4. **Test length**: Some translations may be longer - that's OK
5. **Cultural context**: Adapt idioms to local culture
6. **Consistency**: Use same terms throughout

### Example Translation

English (`en/common.json`):
```json
{
  "actions": {
    "save": "Save",
    "cancel": "Cancel"
  }
}
```

Spanish (`es/common.json`):
```json
{
  "actions": {
    "save": "Guardar",
    "cancel": "Cancelar"
  }
}
```

## Current Status

| Language | Code | Status | Notes |
|----------|------|--------|-------|
| English | en | ✅ Complete | Default language |
| Spanish | es | ✅ Complete | Production ready |
| French | fr | ⚠️ Needs translation | Structure ready |
| German | de | ⚠️ Needs translation | Structure ready |
| Italian | it | ⚠️ Needs translation | Structure ready |
| Arabic | ar | ⚠️ Needs translation | RTL support included |
| Japanese | ja | ⚠️ Needs translation | Structure ready |
| Chinese | zh | ⚠️ Needs translation | Structure ready |

## Common Issues

### "Translation not showing"
- Check namespace is set correctly
- Verify key exists in JSON file
- Check for typos in translation key
- Make sure JSON file is valid (no trailing commas)

### "Build fails"
- Validate all JSON files are valid
- Check all locale folders have same files
- Run `npm run build` to see specific error

### "Wrong language showing"
- Clear browser cookies
- Clear browser cache
- Check URL has correct locale code

## Contact

For questions about translations or the i18n system, refer to:
- Full documentation: `docs/I18N.md`
- Implementation summary: `I18N_IMPLEMENTATION_SUMMARY.md`
