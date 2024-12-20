/**
 * Condition
 * - Brain of a computer
 */
if (studyBasic) {
  wontJoin();
}

if (studyAdvanced) {
  join();
}

if (techerSpeaks) {
  silent();
}

if (!techerSpeaks) {
  shout();
}

/**
 *  Scenario 1 - single branch
 * if condition
 */
if (hasMoney) {
  purchasePhone();
}

/**
 * Scenario 2 - Two branch
 * if else condition
 */
if (toss === head) {
  win();
} else {
  lose();
}

/**
 * Scenario 3 - Multiple Branch
 */
if (1 > 1) {
  big();
} else if (1 < 1) {
  small();
} else {
  same();
}

