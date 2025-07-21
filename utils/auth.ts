export function get_auth_status(context) {
    var headers = new Headers(context.request.headers);
    if(!headers.get('Authorization'))return false
    const Authorization=headers.get('Authorization').split("Basic ")[1]
    const account = atob(Authorization);
    if(!account)return false
    if(!context.env[account])return false
    return true;
  }
