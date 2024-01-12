#include<bits/stdc++.h>
using namespace std;
#define ll long long int
int main() {
     ll t;
     cin >> t;
     while(t--) {
        int n;
        cin >> n;
        vector<pair<ll , ll>> v(n);
        for(int i = 0; i < n; i++) {
            cin >> v[i].first >> v[i].second;
        }

        sort(v.begin() , v.end());
        int maxi = INT_MAX;
        for(int i = 0; i < n; i++) {
            int k = v[i].first + ceil((double)v[i].second / 2.0) - 1; // max distance for each trap
            maxi = min(maxi , k) ;
        }

        cout << maxi << endl;
     }
    return 0;
}