using Microsoft.JSInterop;

namespace BlazorLab.Helpers
{
    public static class IJSRuntimeExtension
    {
        public static async Task ToastSuccess(this IJSRuntime jsRuntime, string message)
        {
            await jsRuntime.InvokeVoidAsync("showToastr", "success", message);
        }

        public static async Task ToastError(this IJSRuntime jsRuntime, string message)
        {
            await jsRuntime.InvokeVoidAsync("showToastr", "error", message);
        }

        public static async Task ToastInfo(this IJSRuntime jsRuntime, string message)
        {
            await jsRuntime.InvokeVoidAsync("showToastr", "info", message);
        }

        public static async Task ToastWarning(this IJSRuntime jsRuntime, string message)
        {
            await jsRuntime.InvokeVoidAsync("showToastr", "warning", message);
        }
    }
}
