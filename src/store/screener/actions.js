// import API  from '@/api/app';

export default {
  "screener message" (context, message) {
    context.commit("set screener message", message);
  },

  "show screener" (context) {
    context.commit("set screener state", "open");
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    });
  },

  "close screener" (context) {
    context.commit("set screener state", "close");
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    });
  }
}
