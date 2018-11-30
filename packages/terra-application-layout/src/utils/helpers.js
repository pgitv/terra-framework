/**
 * Determines whether or not the given size is considered `compact` or not.
 * This can be used to synchronize component rendering with responsive changes
 * to the ApplicationLayout.
 */
const isSizeCompact = size => size === 'tiny' || size === 'small';

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  TAB: 9,
};

export default {
  isSizeCompact,
  KEYCODES,
};
