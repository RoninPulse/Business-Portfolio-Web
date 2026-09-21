interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const tracker = new Map<string, RateLimitRecord>();

/**
 * Basic in-memory rate limiter
 * @param ip Client IP
 * @param limit Max requests allowed in the window
 * @param windowMs Time window in milliseconds
 */
export function rateLimit(ip: string, limit: number = 5, windowMs: number = 60_000): { success: boolean; remaining: number } {
  const now = Date.now();
  const record = tracker.get(ip);

  // Clean old entries periodically
  if (tracker.size > 1000) {
    for (const [key, value] of tracker.entries()) {
      if (now > value.resetTime) {
        tracker.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    tracker.set(ip, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true, remaining: limit - 1 };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0 };
  }

  record.count += 1;
  return { success: true, remaining: limit - record.count };
}
