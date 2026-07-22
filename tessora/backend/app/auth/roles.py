from enum import Enum


class Role(str, Enum):
    EXEC = "exec"
    ADMIN = "admin"
    HR = "HR"
    STAFF = "staff"


ROLE_PERMISSIONS = {
    Role.EXEC: {"read": "*", "write": "briefings"},
    Role.ADMIN: {"read": "*", "write": "*"},
    Role.HR: {"read": "hr,policies", "write": "hr"},
    Role.STAFF: {"read": "public,own-department", "write": "none"},
}
