/**
 * https://www.greatfrontend.com/questions/javascript/data-merging
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @return {Array}
 */
export default function mergeData(sessions) {
  const results = [];
  const map = new Map();

  sessions.forEach(session => {
    if (map.has(session.user)) {
      const userSession = map.get(session.user);
      userSession.duration += session.duration;

      if (session.equipment.length) {
        userSession.equipment.add(...session.equipment);
      }
    } else {
      const clonedSession = {
        ...session,
        equipment: new Set(session.equipment),
      };
      map.set(session.user, clonedSession);
      results.push(clonedSession);
    }
  });

  return results.map(session => {
    return {
      ...session,
      equipment: Array.from(session.equipment).sort(),
    };
  });
}
