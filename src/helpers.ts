export const calcModifier = (value) => Math.floor((value - 10) / 2);

export const calcTotalSkillPoints = (attrs) => {
  const intel_modifier = calcModifier(attrs["Intelligence"])
  return Math.max(0, 10 + 4 * intel_modifier)
};