// Lightweight validation against brand-profile.schema.json — just the required fields and hex
// patterns the engine actually depends on. Not a full JSON-Schema validator (zero deps).

const HEX = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

export function validateProfile(profile) {
  const errors = [];

  if (typeof profile !== 'object' || profile === null) {
    return ['Not a JSON object.'];
  }

  const brand = profile.brand;
  if (!brand || typeof brand !== 'object') {
    errors.push('"brand" is required.');
    return errors;
  }

  if (!brand.name) errors.push('"brand.name" is required.');

  const colors = brand.colors;
  if (!colors || typeof colors !== 'object') {
    errors.push('"brand.colors" is required.');
  } else {
    if (!colors.primary) errors.push('"brand.colors.primary" is required.');
    else if (!HEX.test(colors.primary)) errors.push('"brand.colors.primary" must be a hex color (e.g. #0a7d33).');

    if (!colors.onPrimary) errors.push('"brand.colors.onPrimary" is required.');
    else if (!HEX.test(colors.onPrimary)) errors.push('"brand.colors.onPrimary" must be a hex color.');

    for (const key of ['text', 'pageBackground', 'cardBackground', 'destructive']) {
      if (colors[key] && !HEX.test(colors[key])) errors.push(`"brand.colors.${key}" must be a hex color.`);
    }
  }

  if (profile.themeMode && profile.themeMode !== 'light') {
    errors.push('"themeMode" must be "light" (only mode supported for now).');
  }

  return errors;
}
