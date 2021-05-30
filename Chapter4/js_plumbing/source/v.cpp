#include <cstdlib>
#include <cstring>

#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#endif

#ifdef __cplusplus
extern "C"
#endif
{

#ifdef __cplusplus
}
#endif

int VaildateValueProvided(const char *value, const char *error_message, char *return_error_message)
{
    //
    if ((value == NULL) || (value[0] == '\0'))
    {
        strcpy(return_error_message, error_message);
        return 0;
    }

    return 1;
}
